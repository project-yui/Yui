# 使用基于Ubuntu 20.04的基础映像
FROM ubuntu:20.04

# 设置环境变量
ENV DEBIAN_FRONTEND=noninteractive
ENV VNC_PASSWD=vncpasswd
COPY ./startup.sh /root/startup.sh
COPY ./supervisord.conf /root/ntqq/supervisord.conf

# 安装必要的软件包
RUN sed -i 's/deb.debian.org/mirrors.ustc.edu.cn/g' /etc/apt/sources.list && \
    sed -i 's/security.debian.org/mirrors.ustc.edu.cn/g' /etc/apt/sources.list && \
    sed -i 's/archive.ubuntu.com/mirrors.ustc.edu.cn/g' /etc/apt/sources.list && \
    apt-get update && apt-get install -y \
    openbox \
    curl \
    x11vnc \
    xvfb \
    fluxbox \
    supervisor \
    libnotify4 \
    libnss3 \
    xdg-utils \
    libsecret-1-0 \
    libgbm1 \
    libasound2 \
    git \
    gnutls-bin \    
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* \
    # 安装novnc
    && git config --global http.sslVerify false \
    && cd /opt && git clone https://github.com/novnc/noVNC.git \
    # 移除无用文件 for noVNC
    && cd /opt/noVNC && rm -rf .git docs tests sanp \
    && cd /opt/noVNC/utils && git clone https://github.com/novnc/websockify.git \
    # 移除无用文件 for websockify
    && cd /opt/noVNC/utils/websockify && rm -rf .git docs tests docker Windows \
    && cp /opt/noVNC/vnc.html /opt/noVNC/index.html \
    # 创建必要的目录
    && mkdir -p ~/.vnc \
    && chmod +x /root/startup.sh \
    && rm /etc/supervisor/supervisord.conf \
    && mv /root/ntqq/supervisord.conf /etc/supervisor/supervisord.conf \
    # 移除软件包
    && apt remove git -y
# 安装Linux QQ (单独一步是为了方便更新版本)
RUN curl -o /root/linuxqq.deb https://dldir1.qq.com/qqfile/qq/QQNT/d0154345/linuxqq_3.2.5-20811_amd64.deb \
    && dpkg -i /root/linuxqq.deb && apt-get -f install -y && rm /root/linuxqq.deb \
    # 移除软件包
    && apt remove curl -y

# 设置容器启动时运行的命令
CMD ["/bin/bash", "-c", "/root/startup.sh"]
