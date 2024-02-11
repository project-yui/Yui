# 使用基于Ubuntu 20.04的基础映像
FROM ubuntu:20.04

# 设置环境变量
ENV DEBIAN_FRONTEND=noninteractive
ENV ELECTRON_RUN_AS_NODE=1

COPY ./startup.sh /root/startup.sh

# 安装必要的软件包
RUN sed -i 's/security.ubuntu.com/mirrors.tuna.tsinghua.edu.cn/g' /etc/apt/sources.list && \
    sed -i 's/archive.ubuntu.com/mirrors.tuna.tsinghua.edu.cn/g' /etc/apt/sources.list && \
    apt-get update
# 安装Linux QQ (单独一步是为了方便更新版本)
RUN apt install -y curl libgtk-3-0 libnotify4 libxss1 xdg-utils libsecret-1-0
RUN mkdir -p /opt && cd /opt \
    && curl -o linuxqq.deb https://dldir1.qq.com/qqfile/qq/QQNT/852276c1/linuxqq_3.2.5-21453_amd64.deb \
    && dpkg -i ./linuxqq.deb && rm ./linuxqq.deb
    # 移除软件包
RUN apt remove curl -y && apt clean && apt autoremove

# 设置容器启动时运行的命令
CMD ["/bin/bash", "-c", "/root/startup.sh"]
