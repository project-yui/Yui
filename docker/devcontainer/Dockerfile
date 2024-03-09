FROM msojocs/yukihana:v3.2.5-21453
RUN apt update
RUN apt install -y wget
WORKDIR /root
RUN wget https://deb.nodesource.com/setup_21.x
RUN bash setup_21.x
RUN apt install -y nodejs
RUN npm install -g pnpm
RUN rm -rf /var/lib/apt/lists/*
COPY "start.sh" "/root/start.sh"
COPY "build.sh" "/root/build.sh"
ENTRYPOINT [ "/root/start.sh" ]