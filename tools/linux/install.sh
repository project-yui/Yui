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

mkdir -p $cache_dir

if [ ! -f "$cache_dir/qq-${program_ver}.AppImage" ];then
    url=$(node $root_dir/tools/common/parse-config.cjs --get-qq-url)
    wget -c -O "$cache_dir/qq-${program_ver}.AppImage.tmp" "$url"
    mv "$cache_dir/qq-${program_ver}.AppImage.tmp" "$cache_dir/qq-${program_ver}.AppImage"
fi

chmod +x "$cache_dir/qq-${program_ver}.AppImage"

cd $cache_dir
"$cache_dir/qq-${program_ver}.AppImage" --appimage-extract

rm -rf "$root_dir/program"
mkdir -p "$root_dir/program"
mv "$cache_dir/squashfs-root"/resources/app/* "$root_dir/program"
# sed -i 's#application.asar/##' "$root_dir/program/package.json"
rm -rf "$cache_dir/squashfs-root"
