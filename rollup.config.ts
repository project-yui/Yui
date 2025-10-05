// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json'
import terser from '@rollup/plugin-terser';
import { InputPluginOption, RollupOptions } from "rollup";
import fs from 'fs'
import obfuscator from 'rollup-plugin-obfuscator';
import bytenode from 'bytenode'
import path from 'path';

const outputDir = process.env['outputDir'] || 'program'
const isDev = process.env.ENVIRONMENT !== 'production'
const options: RollupOptions[] = [
  // {
  //   // 此模块用于其它平台编译字节码
  //   input: 'src/compile.ts',
  //   output: {
  //     dir: outputDir,
  //     format: 'cjs',
  //   },
  //   plugins: [
  //     resolve({
  //       // 将自定义选项传递给解析插件
  //       moduleDirectories: ['node_modules'],
  //       preferBuiltins: true,
  //     }),
  //     commonjs({
  //       include: /node_modules/,
  //       requireReturnsDefault: 'auto', // <---- this solves default issue
  //     }),
  //     typescript(),
  //     // terser(),
  //     // obfuscator({
  //     //   global: true,
  //     // }),
  //   ],
  //   // 指出哪些模块应该视为外部模块
  //   external: ['electron', 'module', 'ntwrapper']
  // },
  {
    input: 'src/index.ts',
    output: {
      dir: outputDir,
      // file: 'D:/GitHub/Yui-vscode/dist/program/resources/app/app_launcher/index.js',
      format: 'cjs',
      banner: (chunk) => {
        // console.log('chunk:', chunk)
        return fs.readFileSync('./tools/prepend.js').toString()
      },
    },
    onwarn: function (warning, handler) {
      // Skip certain warnings

      // should intercept ... but doesn't in some rollup versions
      if (warning.code === 'THIS_IS_UNDEFINED') { return; }
      if (warning.code === 'CIRCULAR_DEPENDENCY') { return; }

      // console.warn everything else
      handler(warning);
    },
    plugins: [
      resolve({
        // 将自定义选项传递给解析插件
        moduleDirectories: ['node_modules'],
        preferBuiltins: true,
      }),
      commonjs({
        include: /node_modules/,
        requireReturnsDefault: 'auto', // <---- this solves default issue
      }),
      typescript(),
      json(),
      // 压缩
      !isDev ? terser() : null,
      // 混淆
      // obfuscator({
      //   global: true,
      // }),
      // {
      //   name: 'jsc',
      //   writeBundle: (options, bundle) => {
      //     console.log('generate jsc...')
      //     if (bundle['core.js']) {
      //       const core = bundle['core.js']
      //       // console.log(options)
      //       if (core.type === 'chunk' && options.dir) {
      //         const fromPath = path.resolve(options.dir, './core.js')
      //         console.log('compile file:', fromPath)
      //         // 字节码生成
      //         bytenode.compileFile({
      //           filename: fromPath,
      //           compileAsModule: true,
      //           electron: true,
      //           compress: true,
      //           electronPath: process.env['PROGRAM_PATH'],
      //           output: `${fromPath}c`,
      //         })
      //       }
      //     }
      //   }
      // }
    ],
    // 指出哪些模块应该视为外部模块
    external: ['module', 'ntwrapper', 'yui-native'],
  },
  {
    // UI hook 用于记录操作界面时调用的方法与参数
    input: 'src/ui.ts',
    output: {
      dir: 'dist',
      format: 'cjs',
    },
    plugins: [
      resolve({
        // 将自定义选项传递给解析插件
        moduleDirectories: ['node_modules'],
        preferBuiltins: true,
      }),
      commonjs({
        include: /node_modules/,
        requireReturnsDefault: 'auto', // <---- this solves default issue
      }),
      typescript(),
      json(),
      // 压缩
      // terser(),
      // 混淆
      // obfuscator({
      //   global: true,
      // }),
    ],
    // 指出哪些模块应该视为外部模块
    external: ['electron', 'module']
  },
];
export default options