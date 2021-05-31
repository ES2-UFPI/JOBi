import Contratante from '../models/Contratante'
import User from '../models/User'

class ContratanteController {
    async store(req, res){
        try{

            const user = await User.create(req.body)

            const contratante = await Contratante.create({
                "user_id": user.id
            });

            res.json({user, contratante});
        }catch(e){
            res.status(400).json({ errors: e})
        }
        
    }

    async index(req, res){
        try{
            const contratantes = await Contratante.findAll()
        
                res.json(contratantes);
        }catch(e){
            res.status(400).json({ errors: e.errors.map((err) => err.message)})
        }
    }

    
}

export default new ContratanteController();