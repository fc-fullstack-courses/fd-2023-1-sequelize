const fs = require('fs');
const multer = require('multer');

const imgFilePath = `${__dirname}/../public/images`;

if(!fs.existsSync(imgFilePath)) {
  fs.mkdirSync(imgFilePath, {
    recursive: true
  })
}

// const storage = multer.diskStorage({})
