const path = require("path");
const { spawn } = require("child_process");
const cmd = process.platform == 'win32' ? 'rollup.CMD' : 'rollup'
spawn(cmd, ['-c', '--configPlugin', '@rollup/plugin-typescript', '-w'], {
    stdio: 'inherit',
    env: {
        ...process.env,
    },
    shell: true
})