const { spawnSync } =require("child_process");

spawnSync('pnpm.ps1', ['-v'], {
    stdio: 'inherit'
})