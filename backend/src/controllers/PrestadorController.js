import Prestador from '../models/Prestador'
import User from '../models/User'

class PrestadorController {
    async store(req, res){
        try{
            const novoUser = await User.create(req.body)

            const novoPrestador = await Prestador.create({
                "user_id": novoUser.id
            });

            res.json(novoUser);
        }catch(e){
            res.status(400).json({ errors: e.errors.map((err) => err.message)})
        }
        
    }
}

export default new PrestadorController();