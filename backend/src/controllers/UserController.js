import User from '../models/User'

class UserController {
    async store(req, res){
        try{
            const novoUser = await User.create(req.body);

            res.json(novoUser);
        }catch(e){
            res.status(400).json({ errors: e.errors.map((err) => err.message)})
        }
        
    }
    async select(req,res){
        try{

            if(!req.params.id){
                return res.status(400).json({ 
                    errors: ['ID não enviado']
                 });
            }

            const user_buscado = await User.findByPk(req.params.id);
            return res.json(user_buscado);

        }catch(e){
            return res.json(null)
        }
    }
}

export default new UserController();