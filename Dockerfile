FROM msojocs/yui:v3.2.13_241121

COPY ./program/resources/app/app_launcher/index.js /opt/QQ/resources/app/app_launcher/index.js
COPY ./program/resources/app/app_launcher/nt_native.node /opt/QQ/resources/app/app_launcher/nt_native.node
COPY ./program/resources/app/app_launcher/yui.yaml /opt/QQ/resources/app/app_launcher/yui.yaml
