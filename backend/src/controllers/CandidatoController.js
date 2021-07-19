import Candidato from '../models/Candidato'
import Prestador from '../models/Prestador'
import User from '../models/User'

 
class CandidatoController {
    async store(req, res){
        try{

            const novoCandidato = await Candidato.create(req.body);

            return res.json(novoCandidato);
        }catch(e){
            console.log(e.errors)
            return res.status(400)//.json({ errors: e.errors.map((err) => err.message)})
        }
        
    }
   
    async select(req,res){
        
        try{

           

            const candidato = await Candidato.findByPk(req.params.id);
            const prestador = await Prestador.findByPk(candidato.prestador_id);
            const user = await User.findByPk(prestador.user_id);
            const obj = {candidato, prestador, user}
            
            return res.json(obj);

        }catch(e){
            return res.json(null)
        }
    }

    async index(req, res){
        try{
            const candidatos = await Candidato.findAll({ where: { vaga_id: req.params.id }})
        
           
            return res.json(candidatos);
           
           
        }catch(e){
            console.log(e)
            res.status(400).json(e)
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