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
      // cross-env YUKIHANA_LOG=true YUKIHANA_ACTION=dev cmd.exe /C \".\\ntqq\\QQ.exe > tmp\\output.log 2>&1\"
      spawn("cmd.exe", ["/C", `.\\QQ.exe > ..\\output.log 2>&1`], {
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
