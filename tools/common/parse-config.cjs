const fs = require("fs");
const path = require("path");
const util = require("util");

const args = process.argv.slice(2);

const configPath = path.join(__dirname, "../../config/config.json");
const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));

const options = {
    'get-qq-url': {
        type: 'boolean',
        description: 'Get the QQ download URL from the config file',
    },
    'get-qq-version': {
        type: 'boolean',
        description: 'Get the QQ version from the config file',
    },
    'get-yui-native-url': {
        type: 'boolean',
        description: 'Get the Yui Native download URL from the config file',
    },
    'get-yui-native-version': {
        type: 'boolean',
        description: 'Get the Yui Native version from the config file',
    },
    'get-yui-preload-url': {
        type: 'boolean',
        description: 'Get the Yui Preload download URL from the config file',
    },
    'get-yui-preload-version': {
        type: 'boolean',
        description: 'Get the Yui Preload version from the config file',
    },
}
const { values, positionals } = util.parseArgs({args, options});

if (values['get-qq-url']) {
    const qqConfig = config.qq;
    if (qqConfig && qqConfig.template && qqConfig.version) {
        const downloadUrl = qqConfig.template.replace('${version}', qqConfig.version);
        (async () => {
            const res = await fetch("https://im.qq.com/http2rpc/gotrpc/noauth/trpc.qqntv2.urlsign.UrlSign/GetSign", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-oidb': '{"uint32_command":"0x9b8e","uint32_service_type":1}',
                },
                body: JSON.stringify({
                    "url": downloadUrl,
                }),
            });
            const data = await res.json();
            if (data && data.retcode === 0 && data.data && data.data.url) {
                console.log(data.data.url);
            } else {
                console.error('Failed to get signed URL from the API');
                process.exit(1);
            }
        })();
    } else {
        console.error('QQ configuration is missing or incomplete in config.json');
        process.exit(1);
    }
}
if (values['get-qq-version']) {
    const qqConfig = config.qq;
    if (qqConfig && qqConfig.version) {
        console.log(qqConfig.version);
    } else {
        console.error('QQ version is missing in config.json');
        process.exit(1);
    }
}
if (values['get-yui-native-url']) {
    const yuiNativeConfig = config.yui.native;
    if (yuiNativeConfig && yuiNativeConfig.template && yuiNativeConfig.version) {
        const downloadUrl = yuiNativeConfig.template.replace(/\$\{version\}/g, yuiNativeConfig.version);
        console.log(downloadUrl);
    } else {
        console.error('Yui Native configuration is missing or incomplete in config.json');
        process.exit(1);
    }
}
if (values['get-yui-native-version']) {
    const yuiNativeConfig = config.yui.native;
    if (yuiNativeConfig && yuiNativeConfig.version) {
        console.log(yuiNativeConfig.version);
    } else {
        console.error('Yui Native version is missing in config.json');
        process.exit(1);
    }
}
if (values['get-yui-preload-url']) {
    const yuiPreloadConfig = config.yui.preload;
    if (yuiPreloadConfig && yuiPreloadConfig.template && yuiPreloadConfig.version) {
        const downloadUrl = yuiPreloadConfig.template.replace(/\$\{version\}/g, yuiPreloadConfig.version);
        console.log(downloadUrl);
    } else {
        console.error('Yui Preload configuration is missing or incomplete in config.json');
        process.exit(1);
    }
}
if (values['get-yui-preload-version']) {
    const yuiPreloadConfig = config.yui.preload;
    if (yuiPreloadConfig && yuiPreloadConfig.version) {
        console.log(yuiPreloadConfig.version);
    } else {
        console.error('Yui Preload version is missing in config.json');
        process.exit(1);
    }
}