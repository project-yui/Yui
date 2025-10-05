const path = require("path");
const fs = require("fs");
const { spawn } = require("child_process");

fs.copyFileSync(
  path.resolve(__dirname, "../../yui.yaml"),
  path.resolve(__dirname, "../../program/yui.yaml")
);

switch (process.platform) {
  case "win32":
    {
      console.log("nodestart");
      // cross-env YUKIHANA_LOG=true ELECTRON_RUN_AS_NODE=1 .\\ntqq\\QQ.exe .\\ntqq\\resources\\app\\app_launcher\\index.js
      const pro = spawn("node", ["./index.js"], {
        stdio: "inherit",
        env: {
          ...process.env,
          YUI_LOG: true,
          ELECTRON_RUN_AS_NODE: true,
          YUI_ACTION: "dev",
          ELECTRON_ATTACH_CONSOLE: "1",
          YUI_NATIVE: "D:/GitHub/Yui-native/build/nt_native.node",
          // QQV8BytecodeDebug: '1',
        },
        cwd: path.resolve(__dirname, "../../program"),
      });
    }
    break;
  case "linux":
    {
      // cross-env YUKIHANA_LOG=true ELECTRON_RUN_AS_NODE=1 .\\ntqq\\QQ.exe .\\ntqq\\resources\\app\\app_launcher\\index.js
      spawn("node", ["./index.js"], {
        stdio: "inherit",
        env: {
          ...process.env,
          YUI_LOG: true,
          YUI_ACTION: "dev",
          YUI_PRELOAD: "/home/msojocs/github/Yui-native/build/preload.node",
          YUI_NATIVE: "/home/msojocs/github/Yui-native/build/nt_native.node",
        },
        cwd: path.resolve(__dirname, "../../program"),
      });
    }
    break;
}
