import multer from 'multer';
import multerConfig from '../config/multerConfig'
import Prestador from '../models/Prestador'
import User from '../models/User'


const upload = multer(multerConfig).single('arquivo')

class PrestadorController {
    async store(req, res){
        try{
            const categoria = req.body.categoria
            const user = await User.create(req.body)
            const prestador = await Prestador.create({
                "user_id": user.id,
                "categoria": categoria
            });

            res.json({user, prestador});
        }catch(e){
            res.status(400).json({ errors: e.errors.map((err) => err.message)})
        }
    }
    async index(req, res){
        var users = []
        try{
            var prestadores = await Prestador.findAll()
        
                res.json(prestadores);
        }catch(e){
            res.status(400).json({ errors: e.errors.map((err) => err.message)})
        }
    }
    curriculo(req, res){
        try{

             upload(req, res, async (err) =>{
                if(err){
                    return res.status(400).json({ errors: [errors.code]})
                }
                const { filename } = req.file

                const prestador = await Prestador.findByPk(req.body.id)

                if(!req.body.id){
                    return res.status(400).json({ 
                        errors: ['ID não enviado']
                    });
                }
                req.body.curriculo = filename

                const prestadorAtualizado = prestador.update(req.body);
                return res.json(prestadorAtualizado);
                
            });
    
        

        }catch(e){
            return res.json(null)
        }
    }
    async update(req, res){
        try{

            const prestador = await Prestador.findByPk(req.params.id)

            if(!req.params.id){
                return res.status(400).json({ 
                    errors: ['ID não enviado']
                 });
            }

            const prestadorAtualizado = prestador.update(req.body);
             res.json(prestadorAtualizado);

        }catch(e){
             res.json(null)
        }
    }

    
}

export default new PrestadorController();