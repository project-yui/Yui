const path = require('path');
const { execSync } = require('child_process');
(async () => {
    switch (process.platform) {
        case 'win32':
            await require('../windows/install-ui.cjs').windows();
            break;
            
        case 'linux':
            execSync(path.resolve(__dirname, '../linux/install-ui.sh'), {stdio: 'inherit'})
            break;
    
        default:
            throw new Error(`platform ${process.platform} not supported!`);
            break;
    }
})()