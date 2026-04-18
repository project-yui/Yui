import fs from "node:fs"
import path from "node:path"
import { builtinModules } from "node:module"
import { fileURLToPath } from "node:url"
import { defineConfig } from "vite"

type BuildTarget = 'main' | 'ui'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

const buildTargetConfigs = {
  main: {
    entry: path.resolve(rootDir, "src/index.ts"),
    outDir: "program",
    entryFileName: "index.js",
    banner: fs.readFileSync(path.resolve(rootDir, "tools/prepend.js"), "utf8"),
    external: ["ntwrapper", "yui-native"],
  },
  ui: {
    entry: path.resolve(rootDir, "src/ui.ts"),
    outDir: "dist",
    entryFileName: "ui.js",
    banner: undefined,
    external: ["electron"],
  },
} as const satisfies Record<BuildTarget, {
  entry: string
  outDir: string
  entryFileName: string
  banner?: string
  external: string[]
}>

const nodeBuiltins = [
  ...builtinModules,
  ...builtinModules.map((name) => `node:${name}`),
]

const resolveBuildTarget = (): BuildTarget => {
  return process.env["YUI_BUILD_TARGET"] === "ui" ? "ui" : "main"
}

export default defineConfig(() => {
  const target = buildTargetConfigs[resolveBuildTarget()]
  const isProduction = process.env["ENVIRONMENT"] === "production"

  return {
    resolve: {
      conditions: ["node"],
      mainFields: ["module", "jsnext:main", "jsnext", "main"],
    },
    ssr: {
      external: target.external,
      noExternal: true,
    },
    build: {
      copyPublicDir: false,
      emptyOutDir: false,
      minify: isProduction ? "esbuild" : false,
      outDir: target.outDir,
      sourcemap: true,
      ssr: target.entry,
      rollupOptions: {
        external: [...nodeBuiltins, ...target.external],
        onwarn(warning, handler) {
          if (warning.code === "THIS_IS_UNDEFINED") {
            return
          }
          if (warning.code === "CIRCULAR_DEPENDENCY") {
            return
          }
          handler(warning)
        },
        output: {
          banner: target.banner,
          entryFileNames: target.entryFileName,
          exports: "auto",
          format: "cjs",
          inlineDynamicImports: true,
        },
      },
    },
  }
})
