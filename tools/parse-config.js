import { exit } from "node:process"
import pkg from "../package.json" with { type: "json" }

const args = new Set(process.argv.slice(2))

if (args.has("--get-qq-version")) {
  console.log(pkg.version.split("-")[0])
  exit(0)
}

if (args.has("--get-image-version")) {
  console.log(pkg.version)
  exit(0)
}
