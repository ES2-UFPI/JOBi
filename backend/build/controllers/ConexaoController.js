"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Conexao = require('../models/Conexao'); var _Conexao2 = _interopRequireDefault(_Conexao);

class ConexaoController {
    async store(req, res){
        try{
            const novaConexao = await _Conexao2.default.create(req.body);

            res.json(novaConexao);
        }catch(e){
            console.log(e)
            //res.status(400).json({ errors: e.errors.map((err) => err.message)})
        }
        
    }
    async index(req,res){
        try{
            const conexao = await _Conexao2.default.findAll();
            return res.json(conexao);

        }catch(e){
            return res.json(null)
        }
    }
    async chats_prestador(req,res){
        try{
            const conexao = await _Conexao2.default.findAll({ where: {prestador_id: req.body.id} });
            return res.json(conexao);

        }catch(e){
            return res.json(null)
        }
    }

    async chats_contratante(req,res){
        try{
            const conexao = await _Conexao2.default.findAll({ where: {contratante_id: req.body.id} });
            return res.json(conexao);

        }catch(e){
            return res.status(400).json(null)
        }
    }

    async delete(req,res){
        try{
            if(!req.params.id){
                return res.status(400).json({ 
                    errors: ['ID não enviado']
                 });
            }

            const conexao = await _Conexao2.default.findByPk(req.body);

            if(!user) {
                return res.status(400).json({ 
                    errors: ['Usuário não existe!']
                 })
            }

            await conexao.destroy();
            return res.json(conexao);

        }catch(e){
            return res.status(400).json({ errorserrors: e.erros.map((err)=> err.message) })

        }
    }
}

exports. default = new ConexaoController();