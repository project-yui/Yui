# 使用基于Ubuntu 20.04的基础映像
FROM ubuntu:20.04

# 设置环境变量
ENV DEBIAN_FRONTEND=noninteractive
# ENV ELECTRON_RUN_AS_NODE=1

# 安装必要的软件包
RUN sed -i 's/security.ubuntu.com/mirrors.tuna.tsinghua.edu.cn/g' /etc/apt/sources.list && \
    sed -i 's/archive.ubuntu.com/mirrors.tuna.tsinghua.edu.cn/g' /etc/apt/sources.list && \
    apt-get update \
    && apt install -y curl libgtk-3-0 libnotify4 libxss1 xdg-utils libsecret-1-0 \
    && apt-get install --no-install-recommends -y xvfb \
    && rm -rf /var/lib/apt/lists/*
COPY xvfb-startup.sh /opt

ENV QQ_VERSION=3.2.13_241121
# 安装Linux QQ (单独一步是为了方便更新版本)
RUN sed -i 's/\r$//' /opt/xvfb-startup.sh && chmod +x /opt/xvfb-startup.sh \
    && mkdir -p /opt && cd /opt \
    && curl -o linuxqq.deb https://dldir1.qq.com/qqfile/qq/QQNT/Linux/QQ_${QQ_VERSION}_amd64_01.deb \
    && dpkg -i ./linuxqq.deb && rm ./linuxqq.deb && sed -i 's#application.asar/##' /opt/QQ/resources/app/package.json \
    # 移除软件包
    && apt remove curl -y && apt clean -y && apt autoremove -y

# 降低xvfb的内存占用
ARG RESOLUTION="1x0x8"
ENV XVFB_RES="${RESOLUTION}"
ARG XARGS=""
ENV XVFB_ARGS="${XARGS}"
# 设置容器启动时运行的命令
CMD ["/bin/bash", "-c", "/opt/xvfb-startup.sh"]
