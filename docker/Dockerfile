# 使用基于Ubuntu 20.04的基础映像
FROM node:22-slim

# 设置环境变量
ENV DEBIAN_FRONTEND=noninteractive
# ENV ELECTRON_RUN_AS_NODE=1

# 安装必要的软件包
RUN apt-get update \
    # QQ 依赖
    && apt install -y curl libgtk-3-0 libnotify4 libxss1 xdg-utils libsecret-1-0 libnss3 \
    && rm -rf /var/lib/apt/lists/*

ARG QQ_VERSION
# 安装Linux QQ (单独一步是为了方便更新版本)
RUN mkdir -p /opt && cd /opt \
    && curl -o linuxqq.deb "https://dldir1.qq.com/qqfile/qq/QQNT/Linux/QQ_"$QQ_VERSION"_amd64_01.deb" \
    && dpkg -i ./linuxqq.deb && rm ./linuxqq.deb \
    # 移除软件包
    && apt remove curl -y && apt clean -y && apt autoremove -y
WORKDIR /opt/QQ
# 设置容器启动时运行的命令
CMD ["node", "./resources/app/app_launcher/index.js"]
