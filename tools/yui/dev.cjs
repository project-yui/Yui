const path = require("path");
const { spawn } = require("child_process");

const rootDir = path.resolve(__dirname, "../../");
const cmd = process.platform === "win32" ? "vite.CMD" : "vite";
const shell = process.platform === "win32";
const targets = ["main", "ui"];

let isShuttingDown = false;

const children = targets.map((target) =>
  spawn(cmd, ["build", "--watch", "--config", "vite.config.ts"], {
    stdio: "inherit",
    cwd: rootDir,
    env: {
      ...process.env,
      YUI_BUILD_TARGET: target,
    },
    shell,
  })
);

const stopChildren = (signal) => {
  for (const child of children) {
    if (!child.killed) {
      child.kill(signal);
    }
  }
};

const shutdown = (signal, exitCode = 0) => {
  if (isShuttingDown) {
    return;
  }
  isShuttingDown = true;
  stopChildren(signal);
  process.exitCode = exitCode;
};

for (const child of children) {
  child.on("exit", (code, signal) => {
    if (isShuttingDown) {
      return;
    }
    shutdown("SIGTERM", code ?? (signal ? 1 : 0));
  });
}

process.on("SIGINT", () => {
  shutdown("SIGINT", 130);
});

process.on("SIGTERM", () => {
  shutdown("SIGTERM", 143);
});
