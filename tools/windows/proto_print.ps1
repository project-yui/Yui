$root_dir = Resolve-Path (Join-Path $PSScriptRoot "../../")
Write-Host $root_dir

$protoc_ver = "21.12"

$Env:Path="$cache_dir/protoc-${protoc_ver}/bin;$Env:Path"

# 0,1 私聊戳 169 -> 3354
# 2,3 群戳   169 -> 2284
# 4,5 群戳   169 -> 3354
for($i = 0; $i -lt 2; $i++)
{
    Write-Host "------------$i---------------"
    cmd /C "protoc --decode_raw < $root_dir/tmp/test$i.bin"
}
# Write-Host "-----------test5:"
# cmd /C "protoc --decode_raw < $root_dir/tmp/test59.bin"