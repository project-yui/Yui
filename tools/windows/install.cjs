const { existsSync, readdir, renameSync, rmSync, readFileSync } = require ("fs");
const { useLogger } = require ("../common/log.cjs");
const path = require ('path')
const Downloader = require ("nodejs-file-downloader");
const { execSync } = require ("child_process");

const programPath = path.resolve(__dirname, '../../program');

const log = useLogger('Install')
const downloadVersion = '9.9.21_250904'
// 
/**
 * 移动文件的函数
 * @param {string} sourceDir 
 * @param {string} destDir 
 */
function moveFilesAndDeleteDir(sourceDir, destDir) {
    // 读取 b 目录下的所有文件
    readdir(sourceDir, (err, files) => {
        if (err) {
            console.error(`读取目录出错: ${err}`);
            return;
        }

        // 遍历每个文件
        files.forEach(file => {
            const sourceFilePath = path.join(sourceDir, file);
            const destFilePath = path.join(destDir, file);

            // 将文件移动到 a 目录
            renameSync(sourceFilePath, destFilePath);
        });

        // 删除 b 目录
        rmSync(sourceDir, { recursive: true });
    });
}
// 安装QQ
const windows = async () => {
    // 下载
    const qqUrl =
        `https://dldir1.qq.com/qqfile/qq/QQNT/Windows/QQ_${downloadVersion}_x64_01.exe`;
    const cachePath = path.resolve(__dirname, "../../cache");
    {
        const filename = path.basename(qqUrl);

        const filepath = path.resolve(cachePath, filename);
        if (!existsSync(filepath)) {
            log.info("download qq......");
            const downloader = new Downloader({
                url: qqUrl, // If the file name already exists, a new file with the name 200MB1.zip is created.
                directory: cachePath, // This folder will be created, if it doesn't exist.
                onProgress: (percentage) => {
                    process.stdout.write(`\r${percentage}%`);
                    log.info(`\r${percentage}%`);
                }
            });
            log.info('\n');
            try {
                const { filePath, downloadStatus } = await downloader.download(); //Downloader.download() resolves with some useful properties.

                log.info("All done");
            } catch (error) {
                //IMPORTANT: Handle a possible error. An error is thrown in case of network errors, or status codes of 400 and above.
                //Note that if the maxAttempts is set to higher than 1, the error is thrown only if all attempts fail.
                log.error("Download qq failed", error);
                throw error;
            }
        }
        else
        {
            log.info('qq was downloaded.')
        }
    }
    {
        const _7zUrl = "https://www.7-zip.org/a/7zr.exe";
        const filepath = path.resolve(cachePath, "7zr.exe");
        if (!existsSync(filepath) && !existsSync(path.resolve(cachePath, "7z/7z.exe"))) {
            log.info("download 7z console......");
            const downloader = new Downloader({
                url: _7zUrl, // If the file name already exists, a new file with the name 200MB1.zip is created.
                directory: cachePath, // This folder will be created, if it doesn't exist.
                onProgress: (percentage) => {
                    log.info(`\r${percentage}%`);
                }
            });
            log.info('\n');
            try {
                const { filePath, downloadStatus } = await downloader.download(); //Downloader.download() resolves with some useful properties.

                log.info("All done");
            } catch (error) {
                //IMPORTANT: Handle a possible error. An error is thrown in case of network errors, or status codes of 400 and above.
                //Note that if the maxAttempts is set to higher than 1, the error is thrown only if all attempts fail.
                log.error("Download 7z failed", error);
                throw error;
            }
        }
        else
        {
            log.info('7z console was downloaded.')
        }
    }
    {
        const _7zUrl = "https://www.7-zip.org/a/7z2407-x64.exe";
        const filepath = path.resolve(cachePath, "7z.exe");
        if (!existsSync(filepath) && !existsSync(path.resolve(cachePath, "7z/7z.exe"))) {
            log.info("download 7z......");
            const downloader = new Downloader({
                url: _7zUrl, // If the file name already exists, a new file with the name 200MB1.zip is created.
                fileName: '7z.exe',
                directory: cachePath, // This folder will be created, if it doesn't exist.
                onProgress: (percentage) => {
                    log.info(`\r${percentage}%`);
                },
                timeout: 60000
            });
            try {
                const { filePath, downloadStatus } = await downloader.download(); //Downloader.download() resolves with some useful properties.

                log.info("All done");
            } catch (error) {
                //IMPORTANT: Handle a possible error. An error is thrown in case of network errors, or status codes of 400 and above.
                //Note that if the maxAttempts is set to higher than 1, the error is thrown only if all attempts fail.
                log.error("Download 7z failed", error);
                throw error;
            }
        }
        else
        {
            log.info('7z was downloaded.')
        }
    }
    // 解压
    {
        log.info('extract.....');
        const _7zConsolepath = path.resolve(cachePath, "7zr.exe");
        let _7zpath = path.resolve(cachePath, "7z.exe");
        const _7zTargetpath = path.resolve(cachePath, "7z");
        const qqFilename = path.basename(qqUrl);
        const qqFilepath = path.resolve(cachePath, qqFilename);

        if (!existsSync(path.resolve(cachePath, "./7z/7z.exe"))) {
            execSync(`${_7zConsolepath} x ${_7zpath} -O${_7zTargetpath}`);
        }
        _7zpath = path.resolve(cachePath, "./7z/7z.exe");

        if (!existsSync(path.resolve(programPath, 'QQ.exe'))) {
            log.info('move.....');
            if (!existsSync(path.resolve(programPath, 'Files'))) {
                execSync(`${_7zpath} x ${qqFilepath} -O${programPath} Files/versions/config.json Files/QQ.exe -r`);
                const cfg = JSON.parse(readFileSync(path.resolve(programPath, 'Files/versions/config.json')).toString())
                execSync(`${_7zpath} x ${qqFilepath} -O${programPath} Files/versions/${cfg.curVersion} -r`);
                moveFilesAndDeleteDir(path.resolve(programPath, `Files/versions/${cfg.curVersion}`), programPath);
            }
            renameSync(path.resolve(programPath, 'Files/QQ.exe'), path.resolve(programPath, 'QQ.exe'))
        }
        else
        {
            log.info('qq was installed.')
        }
    }
    {
        // 过校验
        if (!existsSync(path.resolve(programPath, './dbghelp.dll'))) {
            const filepath = programPath;
            log.info("download dbghelp.dll......");
            const downloader = new Downloader({
                url: 'https://github.com/project-yui/Yui-patch/releases/download/v1.1.3/yui-dbghelp-win32-x86_64-v1.1.3.dll', // If the file name already exists, a new file with the name 200MB1.zip is created.
                directory: filepath, // This folder will be created, if it doesn't exist.
                fileName: 'dbghelp.dll',
                onProgress: (percentage) => {
                    log.info(`\r${percentage}%`);
                },
                timeout: 60000
            });
            try {
                const { filePath, downloadStatus } = await downloader.download(); //Downloader.download() resolves with some useful properties.
                
                log.info("All done");
            } catch (error) {
                //IMPORTANT: Handle a possible error. An error is thrown in case of network errors, or status codes of 400 and above.
                //Note that if the maxAttempts is set to higher than 1, the error is thrown only if all attempts fail.
                log.error("Download dbghelp failed", error);
                throw error;
            }
        }
        else
        {
            log.info('patch was applied.')
        }
    }
    // 清理
    {
        log.info('clean......');
        try {
            rmSync(path.resolve(programPath, 'Files'), {recursive: true});
        } catch { }
        try {
            rmSync(path.resolve(cachePath, '7zr.exe'));
        } catch { }
        try {
            rmSync(path.resolve(cachePath, '7z.exe'));
        } catch { }
        log.info('done.');
    }
};

module.exports = {
    windows
}