const { execSync, exec, spawn, ChildProcess } = require('child_process')
const fs = require('fs')
const path = require('path')
/** @type {import('yaml')} */
const yaml = require('yaml')


/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
function mergeDeep(target, ...sources) {
    if (!sources.length) return target;
    const source = sources.shift();

    if (isObject(target) && isObject(source)) {
        for (const key in source) {
        if (isObject(source[key])) {
            if (!target[key]) Object.assign(target, { [key]: {} });
            mergeDeep(target[key], source[key]);
        } else {
            Object.assign(target, { [key]: source[key] });
        }
        }
    }

    return mergeDeep(target, ...sources);
}

// 先读默认
const ymlData = fs.readFileSync(path.resolve(__dirname, '../yukihana.yaml')).toString()

/** @type {import('./types/dev').YukihanaDevConfig} */
const cfg = yaml.parse(ymlData)
let devConfig = cfg.yukihana.dev

const externalCfg = path.resolve(__dirname, `../yukihana.${cfg.yukihana.profiles.active}.yaml`)
// 再读自定义配置，并覆盖
if (fs.existsSync(externalCfg)) {
    const ymlData = fs.readFileSync(externalCfg).toString()

    /** @type {import('./types/dev').YukihanaDevConfig} */
    const cfg = yaml.parse(ymlData)

    console.log('deep merge config')
    devConfig = mergeDeep(devConfig, cfg.yukihana.dev)
}

const args = process.argv.slice(2)

const copyConfiguration = () => 
{
    try {
        fs.mkdirSync(path.resolve(__dirname, '../program/resources/app/app_launcher'), {recursive: true})
    } catch(_){}
    fs.copyFileSync(path.resolve(__dirname, '../yukihana.yaml'), path.resolve(__dirname, '../program/resources/app/app_launcher/yukihana.yaml'))
    fs.copyFileSync(path.resolve(__dirname, '../resources/hack/patch.json'), path.resolve(__dirname, '../program/patch.json'))
}
copyConfiguration()

/////////////////////////配置处理完毕////////////////////////////////////

const ActionHandle = {
    /**
     * 
     * @param {string[]} args 参数
     */
    dev: (args) => {
        // rollup -c --configPlugin @rollup/plugin-typescript -w
        const cmd = process.platform == 'win32' ? 'rollup.CMD' : 'rollup'
        spawn(cmd, ['-c', '--configPlugin', '@rollup/plugin-typescript', '-w'], {
            stdio: 'inherit',
            env: {
                ...process.env,
                PROGRAM_PATH: devConfig.program_path
            },
            shell: true
        })
    },
    /**
     * 
     * @param {string[]} args 参数
     */
    build: (args) => {
        // rollup -c --configPlugin @rollup/plugin-typescript -w
        const cmd = process.platform == 'win32' ? 'rollup.CMD' : 'rollup'
        spawn(cmd, ['-c', '--configPlugin', '@rollup/plugin-typescript'], {
            stdio: 'inherit',
            env: {
                ...process.env,
                PROGRAM_PATH: devConfig.program_path
            },
            shell: true
        })
    },
    /**
     * 
     * @param {string[]} args 参数
     */
    start: (args) => {
        // cross-env YUKIHANA_LOG=true YUKIHANA_ACTION=dev .\\ntqq\\QQ.exe
        spawn(devConfig.program_path, {
            stdio: 'inherit',
            env: {
                ...process.env,
                YUKIHANA_LOG: true,
                YUKIHANA_ACTION: 'ui',
                YUKIHANA_NATIVE: "D:/GitHub/Yukihana-native/build/nt_native.node",
            },
            cwd: path.resolve(__dirname, '../program'),
        })
    },
    'start-log-file': (args) => {
        switch(process.platform) {
            case 'win32':
                {
                    console.log('write log to tmp/output.log')
                    // cross-env YUKIHANA_LOG=true YUKIHANA_ACTION=dev cmd.exe /C \".\\ntqq\\QQ.exe > tmp\\output.log 2>&1\"
                    spawn('cmd.exe', ['/C', `${devConfig.program_path} > ..\\tmp\\output.log 2>&1`], {
                        stdio: 'inherit',
                        env: {
                            ...process.env,
                            YUKIHANA_LOG: true,
                            YUKIHANA_ACTION: 'ui',
                            YUKIHANA_NATIVE: "D:/GitHub/Yukihana-native/build/nt_native.node",
                            QQV8BytecodeDebug: '1'
                        },
                        cwd: path.resolve(__dirname, '../program'),
                    })
                }
                break
        }
    },
    nodestart: (args) => {
        switch(process.platform) {
            case 'win32':
                {
                    console.log('nodestart')
                    // cross-env YUKIHANA_LOG=true ELECTRON_RUN_AS_NODE=1 .\\ntqq\\QQ.exe .\\ntqq\\resources\\app\\app_launcher\\index.js
                    spawn(devConfig.program_path, ['./program/resources/app/app_launcher/index.js'], {
                        stdio: 'inherit',
                        env: {
                            ...process.env,
                            YUKIHANA_LOG: true,
                            ELECTRON_RUN_AS_NODE: true,
                            YUKIHANA_ACTION: 'dev',
                            YUKIHANA_NATIVE: "D:/GitHub/Yukihana-native/build/nt_native.node",
                        },
                        cwd: path.resolve(__dirname, '../program')
                    })
                }
                break
            case 'linux':
                {
                    // cross-env YUKIHANA_LOG=true ELECTRON_RUN_AS_NODE=1 .\\ntqq\\QQ.exe .\\ntqq\\resources\\app\\app_launcher\\index.js
                    spawn(devConfig.program_path, ['./program/resources/app/app_launcher/index.js'], {
                        stdio: 'inherit',
                        env: {
                            ...process.env,
                            YUKIHANA_LOG: true,
                            ELECTRON_RUN_AS_NODE: true,
                            YUKIHANA_ACTION: 'dev',
                            YUKIHANA_NATIVE: "/home/msojocs/github/nt-native/build/nt_native.node",
                        }
                    })
                }
                break
        }
    },
    'compile-jsc': (args) => {
        switch(process.platform) {
            case 'win32':
                {
                    // cross-env YUKIHANA_LOG=true ELECTRON_RUN_AS_NODE=1 .\\ntqq\\QQ.exe .\\ntqq\\resources\\app\\app_launcher\\compile.js
                    spawn(devConfig.program_path, ['./ntqq/resources/app/app_launcher/compile.js'], {
                        stdio: 'inherit',
                        env: {
                            ...process.env,
                            YUKIHANA_LOG: true,
                            YUKIHANA_ACTION: 'dev',
                            ELECTRON_RUN_AS_NODE: true,
                        }
                    })
                }
                break
        }
    },
}

if (ActionHandle[args[0]]) {
    ActionHandle[args[0]](args.slice(1))
}
else
{
    console.log('不支持的操作')
}