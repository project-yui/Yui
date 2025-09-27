const yaml = require('yaml')
const fs = require('fs')
const path = require('path');
const { windows } = require('./windows/install.cjs');
const { spawn, execSync } = require('child_process');

const startupProgram = process.platform == 'win32' ? '.\\QQ.exe' : './qq'
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
const ymlData = fs.readFileSync(path.resolve(__dirname, '../yui.yaml')).toString()

/** @type {import('./types/dev').YuiDevConfig} */
const cfg = yaml.parse(ymlData)
let devConfig = cfg.yui.dev

const externalCfg = path.resolve(__dirname, `../yui.${cfg.yui.profiles.active}.yaml`)
// 再读自定义配置，并覆盖
if (fs.existsSync(externalCfg)) {
    const ymlData = fs.readFileSync(externalCfg).toString()

    /** @type {import('./types/dev').YuiDevConfig} */
    const cfg = yaml.parse(ymlData)

    console.log('deep merge config')
    devConfig = mergeDeep(devConfig, cfg.yui.dev)
}

const args = process.argv.slice(2)

const copyConfiguration = () => 
{
    try {
        fs.mkdirSync(path.resolve(__dirname, '../program/resources/app/app_launcher'), {recursive: true})
    } catch(_){}
    fs.copyFileSync(path.resolve(__dirname, '../yui.yaml'), path.resolve(__dirname, '../program/resources/app/app_launcher/yui.yaml'))
    fs.copyFileSync(path.resolve(__dirname, '../resources/hack/patch.json'), path.resolve(__dirname, '../program/patch.json'))
    const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../program/resources/app/package.json')).toString())
    pkg.main = './app_launcher/index.js'
    fs.writeFileSync(path.resolve(__dirname, '../program/resources/app/package.patch.json'), JSON.stringify(pkg, null, 2))
}

/////////////////////////配置处理完毕////////////////////////////////////

const ActionHandle = {
    install: async (args) => {
        switch (process.platform) {
            case 'win32':
                await windows();
                break;
                
            case 'linux':
                execSync(path.resolve(__dirname, './linux/install.sh'), {stdio: 'inherit'})
                break;
        
            default:
                throw new Error(`platform ${process.platform} not supported!`);
                break;
        }
    },
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
                PROGRAM_PATH: startupProgram
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
                PROGRAM_PATH: startupProgram
            },
            shell: true
        })
    },
    /**
     * 
     * @param {string[]} args 参数
     */
    start: (args) => {
        copyConfiguration()
        // cross-env YUKIHANA_LOG=true YUKIHANA_ACTION=dev .\\ntqq\\QQ.exe
        spawn(startupProgram, {
            stdio: 'inherit',
            env: {
                ...process.env,
                YUI_LOG: true,
                YUI_ACTION: 'ui',
                YUI_NATIVE: "D:/GitHub/Yui-native/build/nt_native.node",
            },
            cwd: path.resolve(__dirname, '../program'),
        })
    },
    'start-log-file': (args) => {
        copyConfiguration()
        switch(process.platform) {
            case 'win32':
                {
                    console.log('write log to tmp/output.log')
                    // cross-env YUKIHANA_LOG=true YUKIHANA_ACTION=dev cmd.exe /C \".\\ntqq\\QQ.exe > tmp\\output.log 2>&1\"
                    spawn('cmd.exe', ['/C', `${startupProgram} > ..\\tmp\\output.log 2>&1`], {
                        stdio: 'inherit',
                        env: {
                            ...process.env,
                            YUI_LOG: true,
                            // ELECTRON_RUN_AS_NODE: '1',
                            // ELECTRON_ATTACH_CONSOLE: '1',
                            // YUI_ACTION: 'ui',
                            YUI_NATIVE: "D:/GitHub/Yui-native/build/nt_native.node",
                            QQV8BytecodeDebug: '1'
                        },
                        cwd: path.resolve(__dirname, '../program'),
                    })
                }
                break
            case 'linux':
                {
                    console.log('write log to tmp/output.log')
                    // cross-env YUKIHANA_LOG=true YUKIHANA_ACTION=dev cmd.exe /C \".\\ntqq\\QQ.exe > tmp\\output.log 2>&1\"
                    const script = path.resolve(__dirname, '../program/resources/app/app_launcher/index.js')
                    execSync(`./qq ${script} > ../tmp/output.log 2>&1`, {
                        stdio: 'inherit',
                        env: {
                            ...process.env,
                            YUI_LOG: true,
                            // ELECTRON_RUN_AS_NODE: '1',
                            // ELECTRON_ATTACH_CONSOLE: '1',
                            YUI_ACTION: 'ui',
                            YUI_NATIVE: "/home/msojocs/github/Yui-native/build/nt_native.node",
                            QQV8BytecodeDebug: '1'
                        },
                        cwd: path.resolve(__dirname, '../program'),
                    })
                }
                break

        }
    },
    nodestart: (args) => {
        copyConfiguration()
        switch(process.platform) {
            case 'win32':
                {
                    console.log('nodestart')
                    // cross-env YUKIHANA_LOG=true ELECTRON_RUN_AS_NODE=1 .\\ntqq\\QQ.exe .\\ntqq\\resources\\app\\app_launcher\\index.js
                    const pro = spawn('.\\QQ.exe', [], {
                        stdio: 'inherit',
                        env: {
                            ...process.env,
                            YUI_LOG: true,
                            ELECTRON_RUN_AS_NODE: true,
                            YUI_ACTION: 'dev',
                            ELECTRON_ATTACH_CONSOLE: '1',
                            YUI_NATIVE: "D:/GitHub/Yui-native/build/nt_native.node",
                            // QQV8BytecodeDebug: '1',
                        },
                        cwd: path.resolve(__dirname, '../program')
                    })
                }
                break
            case 'linux':
                {
                    // cross-env YUKIHANA_LOG=true ELECTRON_RUN_AS_NODE=1 .\\ntqq\\QQ.exe .\\ntqq\\resources\\app\\app_launcher\\index.js
                    spawn('./qq', ['--disable-gpu'], {
                        stdio: 'inherit',
                        env: {
                            ...process.env,
                            YUI_LOG: true,
                            ELECTRON_RUN_AS_NODE: true,
                            YUI_ACTION: 'dev',
                            YUI_NATIVE: "/home/msojocs/github/Yui-native/build/nt_native.node",
                        },
                        cwd: path.resolve(__dirname, '../program')
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
                    spawn(startupProgram, ['./ntqq/resources/app/app_launcher/compile.js'], {
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