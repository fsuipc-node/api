const fs = require('fs');
const path = require('path');

const ORIG_PKG_PATH = path.resolve(__dirname, '../package.json');
const DEST = path.resolve(__dirname, '../dist/package.json');

const pkgData = require(ORIG_PKG_PATH);

delete pkgData.scripts;
delete pkgData.devDependencies;

fs.writeFileSync(DEST, JSON.stringify(pkgData, null, 2), (err) => {
  if (err) throw err;
});
