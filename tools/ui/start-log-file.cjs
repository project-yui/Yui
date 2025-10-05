const path = require("path");
const fs = require("fs");
const { spawn, execSync } = require("child_process");
const rootDir = path.resolve(__dirname, "../../");
fs.cpSync(
  path.resolve(rootDir, "./dist/ui.js"),
  path.resolve(rootDir, "./tmp/ui/resources/app/app_launcher/ui.js"),
  { recursive: true }
);
fs.cpSync(
  path.resolve(rootDir, "./resources/hack/patch.json"),
  path.resolve(rootDir, "./tmp/ui/patch.json"),
  { recursive: true }
);
const pkg = JSON.parse(
  fs.readFileSync(
    path.resolve(rootDir, "./tmp/ui/resources/app/package.json"),
    "utf-8"
  )
);
pkg.main = "app_launcher/ui.js";
fs.writeFileSync(
  path.resolve(rootDir, "./tmp/ui/resources/app/package.patch.json"),
  JSON.stringify(pkg, null, 2)
);
switch (process.platform) {
  case "win32":
    {
      console.log("write log to tmp/output.log");
      // cross-env YUKIHANA_LOG=true YUKIHANA_ACTION=dev cmd.exe /C ".\ntqq\QQ.exe > tmp\output.log 2>&1"
      const child = spawn("cmd.exe", ["/C", `.\\QQ.exe > ..\\output.log 2>&1`], {
        stdio: "inherit",
        env: {
          ...process.env,
          YUI_LOG: true,
          // ELECTRON_RUN_AS_NODE: '1',
          // ELECTRON_ATTACH_CONSOLE: '1',
          // YUI_ACTION: 'ui',
          YUI_NATIVE: "D:/GitHub/Yui-native/build/nt_native.node",
          QQV8BytecodeDebug: "1",
        },
        cwd: path.resolve(rootDir, "./tmp/ui"),
      });

      // On Windows, Ctrl+C sends SIGINT to this Node process. We want to ensure
      // the spawned cmd.exe and any children (QQ.exe) are also terminated.
      const killChildTree = () => {
        try {
          if (child && child.pid) {
            console.log(`killing process tree for pid ${child.pid}`);
            // taskkill will terminate the process and its child processes (/T)
            // and force termination (/F).
            execSync(`taskkill /PID ${child.pid} /T /F`, { stdio: "inherit" });
          }
        } catch (err) {
          // If taskkill isn't available or fails, attempt a best-effort kill.
          try {
            if (child && typeof child.kill === "function") child.kill();
          } catch (e) {
            // ignore
          }
        }
      };

      const onSignal = (signal) => {
        console.log(`Received ${signal}, terminating child processes...`);
        killChildTree();
        // give some time for taskkill to run, then exit
        setTimeout(() => process.exit(0), 200);
      };

      process.on("SIGINT", () => onSignal("SIGINT"));
      process.on("SIGTERM", () => onSignal("SIGTERM"));
      process.on("exit", () => {
        // Ensure child is cleaned up when main process exits.
        killChildTree();
      });

      // If the child exits, mirror the exit code to our process so the caller
      // sees the same failure/exit.
      child.on("exit", (code, signal) => {
        console.log(`cmd.exe exited with code=${code} signal=${signal}`);
        // give a short delay to flush stdio
        setTimeout(() => {
          // If our process is still running, exit with the same code.
          try {
            if (!process.killed) process.exit(code === null ? 0 : code);
          } catch (e) {}
        }, 50);
      });
    }
    break;
  case "linux":
    {
      console.log("write log to tmp/output.log");
      // cross-env YUKIHANA_LOG=true YUKIHANA_ACTION=dev cmd.exe /C \".\\ntqq\\QQ.exe > tmp\\output.log 2>&1\"
      const script = path.resolve(
        rootDir,
        "./program/resources/app/app_launcher/index.js"
      );
      execSync(`./qq ${script} > ../output.log 2>&1`, {
        stdio: "inherit",
        env: {
          ...process.env,
          YUI_LOG: true,
          // ELECTRON_RUN_AS_NODE: '1',
          // ELECTRON_ATTACH_CONSOLE: '1',
          YUI_ACTION: "ui",
          YUI_NATIVE: "/home/msojocs/github/Yui-native/build/nt_native.node",
          QQV8BytecodeDebug: "1",
        },
        cwd: path.resolve(rootDir, "./program"),
      });
    }
    break;
}
