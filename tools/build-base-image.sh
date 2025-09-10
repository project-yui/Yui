#!/bin/bash
root_dir=$(cd `dirname $0`/.. && pwd -P)

cd $root_dir/docker

docker build --build-arg QQ_VERSION=3.2.19_250904 -t msojocs/yui:v3.2.19_250904 .