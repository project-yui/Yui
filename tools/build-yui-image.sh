#!/bin/bash
set -ex

root_dir=$(cd `dirname $0`/.. && pwd -P)

cd $root_dir

qq_version=$(node tools/parse-config.js --get-qq-version)
image_version=$(node tools/parse-config.js --get-image-version)

docker build -t msojocs/yui:$image_version --build-arg QQ_VERSION=$qq_version .