"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multerConfig = require('../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);
var _Prestador = require('../models/Prestador'); var _Prestador2 = _interopRequireDefault(_Prestador);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);


const upload = _multer2.default.call(void 0, _multerConfig2.default).single('arquivo')

class PrestadorController {
    async store(req, res){
        try{
            const categoria = req.body.categoria
            const user = await _User2.default.create(req.body)
            const prestador = await _Prestador2.default.create({
                "user_id": user.id,
                "categoria": categoria
            });

            res.json({user, prestador});
        }catch(e){
            res.status(400).json({ errors: e.errors.map((err) => err.message)})
        }
    }
    async index(req, res){
        var users = []
        try{
            var prestadores = await _Prestador2.default.findAll()
        
                res.json(prestadores);
        }catch(e){
            res.status(400).json({ errors: e.errors.map((err) => err.message)})
        }
    }
    curriculo(req, res){
        try{

             upload(req, res, async (err) =>{
                if(err){
                    return res.status(400).json({ errors: [errors.code]})
                }
                const { filename } = req.file

                const prestador = await _Prestador2.default.findByPk(req.body.id)

                if(!req.body.id){
                    return res.status(400).json({ 
                        errors: ['ID não enviado']
                    });
                }
                req.body.curriculo = filename

                const prestadorAtualizado = prestador.update(req.body);
                return res.json(prestadorAtualizado);
                
            });
    
        

        }catch(e){
            return res.json(null)
        }
    }
    async update(req, res){
        try{

            const prestador = await _Prestador2.default.findByPk(req.params.id)

            if(!req.params.id){
                return res.status(400).json({ 
                    errors: ['ID não enviado']
                 });
            }

            const prestadorAtualizado = prestador.update(req.body);
             res.json(prestadorAtualizado);

        }catch(e){
             res.json(null)
        }
    }

    
}

exports. default = new PrestadorController();