"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _path = require('path');

const aleatorio = () => Math.floor(Math.random() * 10000 +10000)

exports. default ={
    filefilter: (req, file, cb) => {
        //if(file.mimetype !== 'application/msword' && file.mimetype !== 'application/pdf' && file.mimetype !== 'application/vnd.oasis.opendocument.text') {
        if(file.mimetype !== 'text/plain') {
            return cb(new _multer2.default.MulterError('Arquivo precisa ter a extensão ".doc", ".odt" ou ".pdf"'))
        }

        return cb(null, true);
    },
    storage: _multer2.default.diskStorage({
        destination: (req, file, cb) => {
            cb(null, _path.resolve.call(void 0, __dirname, '..', '..', 'uploads'));
        },
    filename: (req, file, cb) =>{
        cb(null, `${Date.now()}_${aleatorio()}${_path.extname.call(void 0, file.originalname)}`);
    },
    })
}