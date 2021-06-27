"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Contratante = require('../models/Contratante'); var _Contratante2 = _interopRequireDefault(_Contratante);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class ContratanteController {
    async store(req, res){
        try{

            const user = await _User2.default.create(req.body)

            const contratante = await _Contratante2.default.create({
                "user_id": user.id
            });

            res.json({user, contratante});
        }catch(e){
            res.status(400).json({ errors: e})
        }
        
    }

    async index(req, res){
        try{
            const contratantes = await _Contratante2.default.findAll()
        
                res.json(contratantes);
        }catch(e){
            res.status(400).json({ errors: e.errors.map((err) => err.message)})
        }
    }

    
}

exports. default = new ContratanteController();