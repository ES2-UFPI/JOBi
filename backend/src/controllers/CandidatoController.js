import Candidato from '../models/Candidato'

 
class CandidatoController {
    async store(req, res){
        try{

            const novoCandidato = await Candidato.create(req.body);

            return res.json(novoCandidato);
        }catch(e){
            console.log(e.errors)
            return res.status(400).json({ errors: e.errors.map((err) => err.message)})
        }
        
    }
   
    async select(req,res){
        
        try{

            if(!req.params.id){
                return res.status(400).json({ 
                    errors: ['ID não enviado']
                 });
            }

            const candidato = await Candidato.findByPk(req.params.id);
            return res.json(vaga);

        }catch(e){
            return res.json(null)
        }
    }

    async index(req, res){
        try{
            const candidato = await Candidato.findAll({ where: { vaga_id: req.params.id }})
        
                res.json(candidato);
        }catch(e){
            res.status(400).json({ errors: e.errors.map((err) => err.message)})
        }
    }

    async update(req, res){
        try{

            const candidato = await Candidato.findByPk(req.params.id)

            if(!req.params.id){
                return res.status(400).json({ 
                    errors: ['ID não enviado']
                 });
            }

            const candidatoAtualizada = candidato.update(req.body);
            return res.json(candidatoAtualizada);

        }catch(e){
            return res.json(null)
        }
    }

   
}

export default new CandidatoController();