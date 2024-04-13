$root_dir = Resolve-Path (Join-Path $PSScriptRoot "../../")
$cache_dir = Join-Path $root_dir "cache"
try
{
    Write-Host $root_dir

    $protoc_ver = "21.12"
    $protoc_url="https://github.com/protocolbuffers/protobuf/releases/download/v${protoc_ver}/protoc-${protoc_ver}-win64.zip"

    Write-Host $protoc_url
    $protoc_zip = "$cache_dir/protoc-${protoc_ver}-win64.zip"

    if (!(Test-Path "$protoc_zip"))
    {
        Write-Host "下载protoc"
        Invoke-WebRequest -Uri "$protoc_url" -OutFile "$protoc_zip.tmp"
        Rename-Item "$protoc_zip.tmp" "$protoc_zip"
    }
    Write-Host "已下载protoc"
    if (!(Test-Path "$cache_dir/protoc-${protoc_ver}/bin/protoc.exe"))
    {
        Write-Host "解压protoc..."
        Expand-Archive -Path "$protoc_zip" -DestinationPath "$cache_dir/protoc-${protoc_ver}"
    }
    Write-Host "已解压protoc"

    $Env:Path="$cache_dir/protoc-${protoc_ver}/bin;$Env:Path"

    protoc --version

    # protoc -I="$root_dir/src/proto/data" --cpp_out="$root_dir/src/proto/" "$root_dir/src/proto/data/message.proto"

}catch
{
    Write-Host "Exception $_"
}