import Contratante from '../models/Contratante'
import User from '../models/User'

class ContratanteController {
    async store(req, res){
        try{

            const novoUser = await User.create(req.body)

            const novoContratante = await Contratante.create({
                "user_id": novoUser.id
            });

            res.json(novoUser);
        }catch(e){
            res.status(400).json({ errors: e.errors.map((err) => err.message)})
        }
        
    }
}

export default new ContratanteController();