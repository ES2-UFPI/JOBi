import User from '../models/User';
import Contratante from '../models/Contratante';
import Prestador from '../models/Prestador';


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
            
            const user = await User.findOne({ where: { email: req.body.email, senha: req.body.senha }});
            
            if(user){
                if(user.status==2){
                    const contratante = await Contratante.findOne({ where: { user_id: user.id }});
                    return res.json({user, contratante});
                }else{
                    const prestador = await Prestador.findOne({ where: { user_id: user.id }});
                    return res.json({user, prestador});
                }
            }else{
                return res.status(400).json({ 
                    errors: ['Usuario ou senha invalidos']
                 });
            }
        }catch(e){
            return res.status(400).json({ 
                errors: ['Dados nao batem']
             });
        }
    }
}

export default new UserController();