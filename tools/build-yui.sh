#!/bin/bash
set -ex

root_dir=$(cd `dirname $0`/.. && pwd -P)

cd $root_dir

pnpm install
pnpm run yui:build
cp yui.yaml ./program/resources/app/app_launcher/yui.yaml
if [ ! -f "$root_dir/program/resources/app/app_launcher/nt_native.node" ];then
    wget -c https://github.com/project-yui/Yui-native/releases/download/continuous/telecord-native-linux-x86_64-continuous.node -O "$root_dir/program/resources/app/app_launcher/nt_native.node"
fi

docker build -t msojocs/yui:v3.2.19_250904-1 .