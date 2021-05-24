import Prestador from '../models/Prestador'

class PrestadorController {
    async store(req, res){
        try{
            const novoPrestador = await Prestador.create(req.body);

            res.json(novoPrestador);
        }catch(e){
            res.status(400).json({ errors: e.errors.map((err) => err.message)})
        }
        
    }
}

export default new PrestadorController();