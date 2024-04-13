import { NTPackageInfo } from "./types/utils"
import { existsSync, readFileSync } from "fs"
import path from "path"

export const getNTPackageInfo = (): NTPackageInfo => {
  const pkgPath = path.resolve(__dirname, '../package.json')
  if (!existsSync(pkgPath)) {
    throw new Error('Can not find package.json!')
  }
  const pkg = JSON.parse(readFileSync(pkgPath).toString())
  return {
    version: pkg.version
  }
}