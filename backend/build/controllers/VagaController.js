"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Vaga = require('../models/Vaga'); var _Vaga2 = _interopRequireDefault(_Vaga);
var _Prestador = require('../models/Prestador'); var _Prestador2 = _interopRequireDefault(_Prestador);


class VagasController { 
    async store(req, res){
        try{

            const novaVaga = await _Vaga2.default.create(req.body);

            return res.json(novaVaga);
        }catch(e){
            console.log(e.errors)
            return res.status(400)//.json({ errors: e.errors.((err) => err.message)})
        }
        
    }
   
    async select_id(req,res){
        
        try{

            if(!req.params.id){
                return res.status(400).json({ 
                    errors: ['ID não enviado']
                 });
            }

            const vaga = await _Vaga2.default.findAll({ where: { contratante_id: req.params.id }});
            return res.json(vaga);

        }catch(e){
            return res.json(null)
        }
    }

    async select_home(req,res){
        try{
        
            if(!req.params.id){
                return res.status(400).json({ 
                    errors: ['ID não enviado']
                 });
            }

                       
            const vaga = await _Vaga2.default.findAll({ where: { categoria: req.params.categoria } });
            return res.json(vaga);

        }catch(e){
            return res.json(null)
        }
    }

    async index(req, res){
        try{
            const vagas = await _Vaga2.default.findAll({ where: { contratante_id: req.params.id }})
        
                res.json(vagas);
        }catch(e){
            res.status(400).json({ errors: e.errors.map((err) => err.message)})
        }
    }

    async update(req, res){
        try{

            const vaga = await _Vaga2.default.findByPk(req.params.id)

            if(!req.params.id){
                return res.status(400).json({ 
                    errors: ['ID não enviado']
                 });
            }

            const vagaAtualizada = vaga.update(req.body);
            return res.json(vagaAtualizada);

        }catch(e){
            return res.json(null)
        }
    }

   
}

exports. default = new VagasController();