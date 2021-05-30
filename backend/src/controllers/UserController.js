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
                const contratante = await Contratante.findOne({ where: { user_id: user.id }});
                console.log(contratante);
                if(contratante){
                    return res.json({user, contratante});
                }else{
                    const prestador = await Prestador.findOne({ where: { user_id: user.id }});
                    console.log(prestador);
                    return res.json({user, prestador});
                }

            }else{
                return res.status(400).json({ 
                    errors: ['Dados nao batem']
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