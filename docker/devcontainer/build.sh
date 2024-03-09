#!/bin/bash

set -e

export SHELL=bash
pnpm setup
source /root/.bashrc

pushd /root/yukihana

echo "Build in $(pwd)"

build/build.sh

popd