#!/bin/bash
# from https://github.com/bengreenier/docker-xvfb/blob/master/docker/xvfb-startup.sh
rm -rf /tmp/.X99-lock
Xvfb :99 -ac -screen 0 "$XVFB_RES" -nolisten tcp $XVFB_ARGS &
XVFB_PROC=$!
sleep 1
export DISPLAY=:99
ls -l /opt
ls -l /opt/QQ
cd /opt/QQ
./qq --no-sandbox --disable-gpu
"$@"
kill $XVFB_PROC