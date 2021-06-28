import Vaga from '../models/Vaga'
import Prestador from '../models/Prestador'


class VagasController { 
    async store(req, res){
        try{

            const novaVaga = await Vaga.create(req.body);

            return res.json(novaVaga);
        }catch(e){
            console.log(e.errors)
            return res.status(400)//.json({ errors: e.errors.((err) => err.message)})
        }
        
    }
   
    async select_id(req,res){
        
        try{

            if(!req.params.id){
                return res.status(400).json({ 
                    errors: ['ID não enviado']
                 });
            }

            const vaga = await Vaga.findAll({ where: { contratante_id: req.params.id }});
            return res.json(vaga);

        }catch(e){
            return res.json(null)
        }
    }

    async select_home(req,res){
        try{
        
            if(!req.params.id){
                return res.status(400).json({ 
                    errors: ['ID não enviado']
                 });
            }

                       
            const vaga = await Vaga.findAll({ where: { categoria: req.params.categoria } });
            return res.json(vaga);

        }catch(e){
            return res.json(null)
        }
    }

    async index(req, res){
        try{
            const vagas = await Vaga.findAll({ where: { contratante_id: req.params.id }})
        
                res.json(vagas);
        }catch(e){
            res.status(400).json({ errors: e.errors.map((err) => err.message)})
        }
    }

    async update(req, res){
        try{

            const vaga = await Vaga.findByPk(req.params.id)

            if(!req.params.id){
                return res.status(400).json({ 
                    errors: ['ID não enviado']
                 });
            }

            const vagaAtualizada = vaga.update(req.body);
            return res.json(vagaAtualizada);

        }catch(e){
            return res.json(null)
        }
    }

   
}

export default new VagasController();