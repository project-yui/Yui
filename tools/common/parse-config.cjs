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
    }
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