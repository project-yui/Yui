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

version=$(node $root_dir/tools/common/parse-config.cjs --get-qq-version)
if [ ! -f "$cache_dir/qq-${version}.AppImage" ];then
    url=$(node $root_dir/tools/common/parse-config.cjs --get-qq-url)
    notice "下载 QQ ${version} 安装包"
    wget -c -O "$cache_dir/qq-${version}.AppImage.tmp" "$url"
    mv "$cache_dir/qq-${version}.AppImage.tmp" "$cache_dir/qq-${version}.AppImage"
fi

chmod +x "$cache_dir/qq-${version}.AppImage"

cd $cache_dir
"$cache_dir/qq-${version}.AppImage" --appimage-extract

rm -rf "$root_dir/program"
mkdir -p "$root_dir/program"
mv "$cache_dir/squashfs-root"/resources/app/* "$root_dir/program"
# sed -i 's#application.asar/##' "$root_dir/program/package.json"
rm -rf "$cache_dir/squashfs-root"

# preload
version=$(node $root_dir/tools/common/parse-config.cjs --get-yui-preload-version)
if [ ! -f "$cache_dir/yui-preload-${version}.node" ];then
    url=$(node $root_dir/tools/common/parse-config.cjs --get-yui-preload-url)
    notice "下载 yui-preload ${version} 模块"
    wget -c -O "$cache_dir/yui-preload-${version}.node.tmp" "$url"
    mv "$cache_dir/yui-preload-${version}.node.tmp" "$cache_dir/yui-preload-${version}.node"
fi
cp "$cache_dir/yui-preload-${version}.node" "$root_dir/program/preload.node"