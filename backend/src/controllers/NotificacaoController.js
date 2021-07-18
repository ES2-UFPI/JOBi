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

            
            const not = await Notificacao.findAll({ where: { user_id: req.params.id }});
            return res.json(not);

        }catch(e){
            return res.json(null)
        }
    }
    async select_toSee(req,res){
        
        try{

            
            const not = await Notificacao.findAll({ where: { user_id: req.params.id, visualizado: 0 }});
            return res.json(not);

        }catch(e){
            return res.json(null)
        }
    }


    async update(req, res){
        try{

            const not = await Notificacao.findAll({where: {user_id: req.params.id, visualizado: 0}})

            not.map( async (notificacao)=> {
                const modificada = await notificacao.update({ 
                    visualizado: 1
                })
            })


            return res.send("modificado");

        }catch(e){
            return res.json(null)
        }
    }

   
}

export default new NotificacaoController();