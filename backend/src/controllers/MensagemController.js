import Mensagem from '../models/Mensagem'

class MensagemController {
    async store(req, res){
        try{
            const novaMensagem = await Mensagem.create(req.body);

            res.json(novaMensagem);
        }catch(e){
            res.status(400).json({ errors: e.errors.map((err) => err.message)})
        }
        
    }
    async index(req,res){
        try{
            const mensagem = await Mensagem.findAll();
            return res.json(mensagem);

        }catch(e){
            return res.json(null)
        }
    }
    async select(req,res){
        
        try{

            if(!req.params.id){
                return res.status(400).json({ 
                    errors: ['ID não enviado']
                 });
            }

            const mensagem = await Mensagem.findByPk(req.params.id);
            return res.json(mensagem);

        }catch(e){
            return res.json(null)
        }
    }

   
}

export default new MensagemController();