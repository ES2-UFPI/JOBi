import multer from 'multer';
import { extname, resolve  } from 'path';

const aleatorio = () => Math.floor(Math.random() * 10000 +10000)

export default{
    filefilter: (req, file, cb) => {
        //if(file.mimetype !== 'application/msword' && file.mimetype !== 'application/pdf' && file.mimetype !== 'application/vnd.oasis.opendocument.text') {
        if(file.mimetype !== 'text/plain') {
            return cb(new multer.MulterError('Arquivo precisa ter a extensão ".doc", ".odt" ou ".pdf"'))
        }

        return cb(null, true);
    },
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, resolve(__dirname, '..', '..', 'uploads'));
        },
    filename: (req, file, cb) =>{
        cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
    })
}