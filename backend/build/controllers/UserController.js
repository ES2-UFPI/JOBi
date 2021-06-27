"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _Contratante = require('../models/Contratante'); var _Contratante2 = _interopRequireDefault(_Contratante);
var _Prestador = require('../models/Prestador'); var _Prestador2 = _interopRequireDefault(_Prestador);


class UserController {
    async store(req, res){
        try{
            const novoUser = await _User2.default.create(req.body);

            res.json(novoUser);
        }catch(e){
            res.status(400).json({ errors: e.errors.map((err) => err.message)})
        }
        
    }
    async select(req,res){
        try{
            
            const user = await _User2.default.findOne({ where: { email: req.body.email, senha: req.body.senha }});
            
            if(user){
                if(user.status==2){
                    const contratante = await _Contratante2.default.findOne({ where: { user_id: user.id }});
                    return res.json({user, contratante});
                }else{
                    const prestador = await _Prestador2.default.findOne({ where: { user_id: user.id }});
                    return res.json({user, prestador});
                }
            }else{
                return res.status(400).json({ 
                    errors: ['Usuario ou senha invalidos']
                 });
            }
        }catch(e){
            return res.status(400).json({ 
                errors: ['Dados nao batem']
             });
        }
    }

    async modifyStatus(req,res){
        
    }
}

exports. default = new UserController();