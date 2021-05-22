import Contratante from '../models/Contratante'

class ContratanteController {
    async store(req, res){
        try{
            const novoContratante = await Contratante.create(req.body);

            res.json(novoContratante);
        }catch(e){
            res.status(400).json({ errors: e.errors.map((err) => err.message)})
        }
        
    }
}

export default new ContratanteController();