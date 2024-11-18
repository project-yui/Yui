$root_dir = Resolve-Path (Join-Path $PSScriptRoot "../../")
Write-Host $root_dir

$protoc_ver = "21.12"

$Env:Path="$cache_dir/protoc-${protoc_ver}/bin;$Env:Path"

cmd /C "protoc --decode_raw < $root_dir/tmp/test1.bin"
cmd /C "protoc --decode_raw < $root_dir/tmp/test3.bin"
# Write-Host "-----------test5:"
# cmd /C "protoc --decode_raw < $root_dir/tmp/test59.bin"