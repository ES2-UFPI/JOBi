"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Mensagem = require('../models/Mensagem'); var _Mensagem2 = _interopRequireDefault(_Mensagem);

class MensagemController {
    async store(req, res){
        try{
            const novaMensagem = await _Mensagem2.default.create(req.body);

            res.json(novaMensagem);
        }catch(e){
            res.status(400).json({ errors: e.errors.map((err) => err.message)})
        }
        
    }
    async index(req,res){
        try{
            const mensagem = await _Mensagem2.default.findAll();
            return res.json(mensagem);

        }catch(e){
            return res.json(null)
        }
    }
    async select(req,res){
        
        try{

            if(!req.params.id){
                return res.status(400).json({ 
                    errors: ['ID não enviado']
                 });
            }

            const mensagem = await _Mensagem2.default.findByPk(req.params.id);
            return res.json(mensagem);

        }catch(e){
            return res.json(null)
        }
    }

   
}

exports. default = new MensagemController();