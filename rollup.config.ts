// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import { RollupOptions } from "rollup";
import fs from 'fs'

const options: RollupOptions = {
  input: 'src/index.ts',
  output: {
    dir: 'ntqq/resources/app/app_launcher/',
    format: 'cjs',
    banner: (chunk) => {
      return fs.readFileSync('./tools/prepend.js').toString()
    }
  },
  watch: {
    include: [
      'src/**',
      'tools/**'
    ]
  },
  plugins: [
    resolve({
        // 将自定义选项传递给解析插件
        moduleDirectories: ['node_modules']
    }),
    commonjs({
      include: /node_modules/,
      requireReturnsDefault: 'auto', // <---- this solves default issue
    }),
    typescript(),
    // terser(),
  ],
  // 指出哪些模块应该视为外部模块
  external: ['electron', 'module', 'ntwrapper']
};
export default options