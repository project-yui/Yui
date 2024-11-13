# 手动安装环境

## 2. 获取QQ

  1. 进入官网：https://im.qq.com/index/
  2. 下载对应平台的安装包
  3. 使用7z打开安装包
  4. ***解压*** `/Files/versions/x.x.xx-xxxxx` 目录中的文件到 **项目** 的`program`目录下（注意，**不能**将文件夹下的文件加入git版本控制）
  5. 解压 `QQ.exe` 文件到**项目** 的`program`目录下。

      大致结构如下：
      ```
      Yui
      ├─program
      │  ├─locales
      │  ├─resources
      │  ├─versions
      │  ├─....
      │  └─QQ.exe
      ├─src
      ├─tools
      ....
      ```
  
  双击 QQ.exe，能启动，说明此步骤成功。

## 3. 跳过启动验证

  1. 打开地址: https://github.com/project-yui/Yui-patch
  2. 下载 release 中的 `dbghelp.dll` 文件，放置于 pragram 文件夹下。
  3. 复制 `program\resources\app\package.json`, `program\resources\app\package.patch.json`;
  4. 修改 `package.patch.json` 内容，`main` 字段的值修改为 `./app_launcher/index.js`。

## 4. 启动

  1. pnpm run dev
  2. pnpm run nodestart
  3. 看到输出中包含：`Hi Yui bot!!`
