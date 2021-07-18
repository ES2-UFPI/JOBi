import Notificacao from '../models/Notificacao'



class NotificacaoController { 
    async store(req, res){
        try{

            const novaNot = await Notificacao.create(req.body);

            return res.json(novaNot);
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

            const not = await Notificacao.findAll({ where: { user_id: req.params.id }});
            return res.json(not);

        }catch(e){
            return res.json(null)
        }
    }


    async update(req, res){
        try{

            const not = await Notificacao.findByPk(req.params.id)

            if(!req.params.id){
                return res.status(400).json({ 
                    errors: ['ID não enviado']
                 });
            }

            const notAtualizada = not.update(req.body);
            return res.json(notAtualizada);

        }catch(e){
            return res.json(null)
        }
    }

   
}

export default new NotificacaoController();