const util = require('util');
const fs = require('fs');
const mkdirp = require('mkdirp');

const checkDir = dirPath => {
  if (!fs.existsSync(dirPath)) {
    mkdirp.sync(dirPath);
  }
}

const pathExists = util.promisify(fs.exists);
const createDir = util.promisify(mkdirp);

const checkDirAsync = async dirPath => {
  const dirExists = await pathExists(dirPath);
  if (!dirExists) {
    await createDir(dirPath)
  }
}

module.exports = {
  checkDir,
  checkDirAsync
};