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

cache_dir="$root_dir/cache"
program_ver="3.2.7_240412"

mkdir -p $cache_dir

if [ ! -f "$cache_dir/qq-${program_ver}.deb" ];then
    wget -c -O "$cache_dir/qq-${program_ver}.deb.tmp" https://dldir1.qq.com/qqfile/qq/QQNT/Linux/QQ_${program_ver}_amd64_01.deb
    mv "$cache_dir/qq-${program_ver}.deb.tmp" "$cache_dir/qq-${program_ver}.deb"
fi

dpkg -x "$cache_dir/qq-${program_ver}.deb" "$root_dir/program"
rm -rf "$root_dir/program/resources" "$root_dir/program/usr"
mv "$root_dir/program/opt/QQ"/* "$root_dir/program"
rm -rf "$root_dir/program/opt"
