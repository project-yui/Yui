// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import { RollupOptions } from "rollup";
import fs from 'fs'
import obfuscator from 'rollup-plugin-obfuscator';
import { spawnSync } from 'child_process';

const options: RollupOptions[] = [ {
  input: 'src/compile.ts',
  output: {
    dir: 'ntqq/resources/app/app_launcher/',
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
    // terser(),
  ],
  // 指出哪些模块应该视为外部模块
  external: ['electron', 'module', 'ntwrapper']
},{
  input: 'src/core.ts',
  output: {
    dir: 'ntqq/resources/app/app_launcher/',
    format: 'cjs',
    banner: (chunk) => {
      // console.log('chunk:', chunk)
      return fs.readFileSync('./tools/prepend.js').toString()
    },
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
    // terser(),
    {
      name: 'jsc',
      writeBundle: (options, bundle) => {
        console.log('generate jsc...')
        if (bundle['core.js']) {
          const core = bundle['core.js']
          if (core.type === 'chunk' && options.dir) {
            // console.log('js:', core.code)
            spawnSync(`./ntqq/QQ.exe`, ['.\\ntqq\\resources\\app\\app_launcher\\compile.js'], {
              stdio: 'inherit',
              env: {
                ELECTRON_RUN_AS_NODE: '1',
              }
            })
            // fs.writeFileSync(path.resolve(options.dir, core.fileName + 'c'), jsc)
          }
        }
      }
    }
  ],
  // 指出哪些模块应该视为外部模块
  external: ['electron', 'module', 'ntwrapper'],
},
{
  input: 'src/index.ts',
  output: {
    dir: 'ntqq/resources/app/app_launcher/',
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
    // 压缩
    terser(),
    obfuscator({
      global: true,
    }),
  ],
  // 指出哪些模块应该视为外部模块
  external: ['electron', 'module', 'ntwrapper']
},
];
export default options