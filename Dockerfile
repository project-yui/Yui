FROM msojocs/yui:v3.2.22_251203

COPY ./program/index.js /opt/QQ/resources/app/index.js
COPY ./program/nt_native.node /opt/QQ/resources/app/nt_native.node
COPY ./program/yui.yaml /opt/QQ/resources/app/yui.yaml
