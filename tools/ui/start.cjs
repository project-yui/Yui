const path = require("path");
const fs = require("fs");
const { spawn } = require("child_process");
const rootDir = path.resolve(__dirname, "../../");
const startupProgram = process.platform == "win32" ? './QQ.exe' : './qq';
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
// overwrite the package.json used by the tmp UI so electron will load our launcher
const pkgPatch = path.resolve(rootDir, process.platform == 'win32'
   ? "./tmp/ui/resources/app/package.patch.json"
   : "./tmp/ui/resources/app/package.json")
fs.writeFileSync(
  pkgPatch,
  JSON.stringify(pkg, null, 2),
  "utf-8"
);

// Launch the program and pipe stdout/stderr to the parent process so logs appear in this console
const pro = spawn(startupProgram, {
  env: {
    ...process.env,
    YUI_LOG: true,
    ELECTRON_ATTACH_CONSOLE: "1",
  },
  cwd: path.resolve(rootDir, "./tmp/ui"),
  shell: false,
});

// If the child has stdout/stderr streams, forward them to the parent console.
if (pro.stdout) {
  pro.stdout.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
}
if (pro.stderr) {
  pro.stderr.on("data", (chunk) => {
    process.stderr.write(chunk);
  });
}

pro.on("error", (err) => {
  console.error(
    "ui:start failed to launch process:",
    err && err.message ? err.message : err
  );
});

pro.on("exit", (code, signal) => {
  if (signal) console.log(`ui process exited with signal ${signal}`);
  else console.log(`ui process exited with code ${code}`);
});
