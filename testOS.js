const os = require(`os`);

console.log(os.networkInterfaces().lo[0]);
