const path = require('path');
const util = require('util');
const url = require('url');
const fs = require('fs');
const formidable = require('formidable');
const { checkDir } = require('../../utils/checkDir');

const { productImageDir: IMG_DIR } = require('../../../config');

const INNER_SERVER_ERROR = 'inner server error';

const setProductImages = (req, res) => {
  const filePath = path.join(__dirname, '../../../', IMG_DIR);
  checkDir(filePath);

  const data = {
    productId: null,
    files: []
  };

  const form = formidable.IncomingForm();
  form.on('fileBegin', function (name, file) {
    file.path = path.join(filePath, file.name);
    data.files.push(file.name);
  });
  form.on('field', function (name, value) {
    data[name] = value;
  });
  form.on('end', function () {
    const productFilePath = path.join(filePath, data.productId);
    const mkdir = util.promisify(fs.mkdir);
    const rmfile = util.promisify(fs.unlink);
    const fexists = util.promisify(fs.exists);

    fexists(productFilePath)
      .then(exists => {
        if (!exists) {
          mkdir(productFilePath);
        }
      })
      .then(() => {
        data.files.forEach(file => {
          const oldPath = path.join(filePath, file);
          const newPath = path.join(productFilePath, file);
          fs.renameSync(oldPath, newPath);
        });
      })
      .then(() => {
        let imageSrc = '';
        if (data.files.length === 1) {
          imageSrc = url.format(path.join(IMG_DIR, data.productId, data.files[0]));
        } else {
          imageSrc = data.files.map(file => url.format(path.join(IMG_DIR, data.productId, file)));
        }

        res.writeHead(201, { 'content-type': 'application/json; charset=utf-8' })
        res.end(JSON.stringify({
          status: "success",
          imageSrc
        }));
      })
      .catch(err => {
        res.writeHead(500, { 'content-type': 'text/plain' });
        res.end(INNER_SERVER_ERROR);
        console.log(err.message);
        data.files.forEach(fileName => {
          rmfile(fileName)
            .catch(err => {
              console.log(err.message);
            })
        });
      });
  });

  form.parse(req);
}

module.exports = setProductImages;