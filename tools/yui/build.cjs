const path = require("path");
const { spawnSync } = require("child_process");

const rootDir = path.resolve(__dirname, "../../");
const cmd = process.platform === "win32" ? "vite.CMD" : "vite";
const shell = process.platform === "win32";

const runBuild = (target) => {
  const result = spawnSync(cmd, ["build", "--config", "vite.config.ts"], {
    stdio: "inherit",
    cwd: rootDir,
    env: {
      ...process.env,
      YUI_BUILD_TARGET: target,
    },
    shell,
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
};

runBuild("main");
runBuild("ui");
