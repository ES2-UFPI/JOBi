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
}

export default new ContratanteController();