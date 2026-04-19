# 使用基于Ubuntu 20.04的基础映像
FROM node:22-slim AS runtime

WORKDIR /app

COPY package.json pnpm-lock.yaml tsconfig.json vite.config.ts ./
COPY tools ./tools

RUN apt update && apt install -y wget \
    && rm -rf /var/lib/apt/lists/*

RUN corepack enable
RUN pnpm run yui:install

FROM node:22-slim AS builder

WORKDIR /app

COPY package.json pnpm-lock.yaml tsconfig.json vite.config.ts ./
COPY src ./src
COPY tools ./tools

RUN corepack enable
RUN pnpm install --frozen-lockfile
RUN pnpm run yui:build

FROM node:22-slim

# 设置环境变量
ENV DEBIAN_FRONTEND=noninteractive
# ENV ELECTRON_RUN_AS_NODE=1

# 安装必要的软件包
RUN apt-get update \
    # QQ 依赖
    && apt install -y libgtk-3-0 xdg-utils \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY --from=runtime /app/program ./
COPY --from=builder /app/program/index.js /app/index.js
ADD --chmod=644 https://github.com/project-yui/Yui-native/releases/download/continuous/nt-native-linux-x86_64-continuous.node /app/nt_native.node
ADD --chmod=644 https://github.com/project-yui/Yui-native/releases/download/continuous/nt-preload-linux-x86_64-continuous.node /app/preload.node
COPY ./yui.yaml /app/yui.yaml

# 设置容器启动时运行的命令
CMD ["node", "/app/index.js"]
