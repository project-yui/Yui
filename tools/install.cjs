const path = require("path");
const { Downloader } = require("nodejs-file-downloader");
const { existsSync, rmSync } = require("fs");
const { execSync } = require("child_process");
const { useLogger } = require("./common/log.cjs");
const fs = require('fs')

const log = useLogger()
// 安装QQ
const windows = async () => {
  // 下载
  const qqUrl =
    "https://dldir1.qq.com/qqfile/qq/QQNT/Windows/QQ_9.9.15_240808_x64_01.exe";
  const cachePath = path.resolve(__dirname, "../cache");
  {
    const filename = path.basename(qqUrl);

    const filepath = path.resolve(cachePath, filename);
    if (!existsSync(filepath)) {
      console.log("download qq......");
      const downloader = new Downloader({
        url: qqUrl, // If the file name already exists, a new file with the name 200MB1.zip is created.
        directory: cachePath, // This folder will be created, if it doesn't exist.
        onProgress: (percentage) => {
          process.stdout.write(`\r${percentage}%`)
        }
      });
      console.log('\n')
      try {
        const { filePath, downloadStatus } = await downloader.download(); //Downloader.download() resolves with some useful properties.

        console.log("All done");
      } catch (error) {
        //IMPORTANT: Handle a possible error. An error is thrown in case of network errors, or status codes of 400 and above.
        //Note that if the maxAttempts is set to higher than 1, the error is thrown only if all attempts fail.
        console.log("Download qq failed", error);
        return;
      }
    }
  }
  {
    const _7zUrl = "https://www.7-zip.org/a/7zr.exe";
    const filepath = path.resolve(cachePath, "7zr.exe");
    if (!existsSync(filepath) && !path.resolve(cachePath, "7z/7z.exe")) {
      console.log("download 7z console......");
      const downloader = new Downloader({
        url: _7zUrl, // If the file name already exists, a new file with the name 200MB1.zip is created.
        directory: cachePath, // This folder will be created, if it doesn't exist.
        onProgress: (percentage) => {
          process.stdout.write(`\r${percentage}%`)
        }
      });
      console.log('\n')
      try {
        const { filePath, downloadStatus } = await downloader.download(); //Downloader.download() resolves with some useful properties.

        console.log("All done");
      } catch (error) {
        //IMPORTANT: Handle a possible error. An error is thrown in case of network errors, or status codes of 400 and above.
        //Note that if the maxAttempts is set to higher than 1, the error is thrown only if all attempts fail.
        console.log("Download 7z failed", error);
      }
    }
  }
  {
    const _7zUrl = "https://www.7-zip.org/a/7z2407-x64.exe";
    const filepath = path.resolve(cachePath, "7z.exe");
    if (!existsSync(filepath) && !path.resolve(cachePath, "7z/7z.exe")) {
      console.log("download 7z......");
      const downloader = new Downloader({
        url: _7zUrl, // If the file name already exists, a new file with the name 200MB1.zip is created.
        fileName: '7z.exe',
        directory: cachePath, // This folder will be created, if it doesn't exist.
        onProgress: (percentage) => {
          process.stdout.write(`\r${percentage}%`)
        }
      });
      console.log('\n')
      try {
        const { filePath, downloadStatus } = await downloader.download(); //Downloader.download() resolves with some useful properties.

        console.log("All done");
      } catch (error) {
        //IMPORTANT: Handle a possible error. An error is thrown in case of network errors, or status codes of 400 and above.
        //Note that if the maxAttempts is set to higher than 1, the error is thrown only if all attempts fail.
        console.log("Download 7z failed", error);
      }
    }
  }
  // 解压
  {
    console.log('extract.....')
    const _7zConsolepath = path.resolve(cachePath, "7zr.exe");
    let _7zpath = path.resolve(cachePath, "7z.exe");
    const _7zTargetpath = path.resolve(cachePath, "7z");
    const qqFilename = path.basename(qqUrl);
    const qqFilepath = path.resolve(cachePath, qqFilename);
    const programPath = path.resolve(__dirname, "../program");

    if (!existsSync(path.resolve(cachePath, "./7z/7z.exe")))
    {
      execSync(`${_7zConsolepath} x ${_7zpath} -O${_7zTargetpath}`);
    }
    _7zpath = path.resolve(cachePath, "./7z/7z.exe");
    
    if (!existsSync(path.resolve(programPath, 'QQ.exe')))
    {
      console.log('move.....')
      if (!existsSync(path.resolve(programPath, 'Files')))
      {
        execSync(`${_7zpath} x ${qqFilepath} -O${programPath} Files -r`);
      }
      moveFilesAndDeleteDir(path.resolve(programPath, './Files'), programPath);
    }
  }
  // 清理
  {
    console.log('clean......')
    try {
      rmSync(path.resolve(cachePath, '7zr.exe'))
    }catch{}
    try {
      rmSync(path.resolve(cachePath, '7z.exe'))
    }catch{}
    console.log('done.')
  }
};
// 移动文件的函数
function moveFilesAndDeleteDir(sourceDir, destDir) {
  const fs = require('fs')
  // 读取 b 目录下的所有文件
  fs.readdir(sourceDir, (err, files) => {
    if (err) {
      console.error(`读取目录出错: ${err}`);
      return;
    }

    // 遍历每个文件
    files.forEach(file => {
      const sourceFilePath = path.join(sourceDir, file);
      const destFilePath = path.join(destDir, file);

      // 将文件移动到 a 目录
      fs.renameSync(sourceFilePath, destFilePath);
    });

    // 删除 b 目录
    fs.rmSync(sourceDir, {recursive: true});
  });
}
(async () => {
  log.info('platform:', process.platform)
  if (process.platform == "win32") {
    await windows();
  }
  else if (process.platform == 'linux')
  {
    execSync(path.resolve(__dirname, './linux/install.sh'))
    const pkgPath = path.resolve(__dirname, '../program/resources/app/package.json')
    const pkg = JSON.parse(fs.readFileSync(pkgPath))
    pkg.main = "./app_launcher/index.js"
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2))
  }
})();
