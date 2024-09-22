#!/bin/bash
root_dir=$(cd `dirname $0`/../.. && pwd -P)

set -e
trap 'catchError $LINENO "$BASH_COMMAND"' ERR # 捕获错误情况
catchError() {
    exit_code=$?
    if [ $exit_code -ne 0 ]; then
        fail "\033[31mcommand: $2\n  at $0:$1\n  at $STEP\033[0m"
    fi
    exit $exit_code
}
notice() {
    echo -e "\033[36m $1 \033[0m "
}
fail() {
    echo -e "\033[41;37m 失败 \033[0m $1"
}

cd $root_dir
touch yukihana.dev.yaml
cat > yukihana.dev.yaml <<EOF
yukihana:
  dev:
    program_path: /opt/QQ/qq
EOF
pnpm install
mkdir -p tmp/build
export outputDir="tmp/build"
pnpm run build
# mv program/resources/app/app_launcher/* tmp/build
cp yukihana.yaml tmp/build
cp resources/ssl/* tmp/build
# rm tmp/build/core.js