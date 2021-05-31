import Prestador from '../models/Prestador'
import User from '../models/User'

class PrestadorController {
    async store(req, res){
        try{
            const user = await User.create(req.body)
            const prestador = await Prestador.create({
                "user_id": novoUser.id
            });

            res.json({user, prestador});
        }catch(e){
            res.status(400).json({ errors: e.errors.map((err) => err.message)})
        }
    }
    async index(req, res){
        var users = []
        try{
            var prestadores = await Prestador.findAll()
        
                res.json(prestadores);
        }catch(e){
            res.status(400).json({ errors: e.errors.map((err) => err.message)})
        }
    }
}

export default new PrestadorController();