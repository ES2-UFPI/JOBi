import Vaga from '../models/Vaga'
import Notificacao from '../models/Notificacao'
import Candidato from '../models/Candidato'
import Prestador from '../models/Prestador'
const path = require('path');

class VagasController { 
    async store(req, res){
        try{
            const file = req.files.arquivo_imagem;
            const newpath = path.join(__dirname, '..', '..', '..', 'frontend', 'public', 'images', 'imagens_vagas', file.name);

            console.log("Arquivo", file);
            console.log("Newpath", newpath);
            
            file.mv(`${newpath}`, (err) => {
                if (err) {
                    res.status(500).send({ message: "File upload failed", code: 200 });
                }else{
                    res.status(200).send({ message: "File Uploaded", code: 200 });
                }
            });
            
            const novaVaga = await Vaga.create(req.body);

            return res.json(novaVaga);
        }catch(e){
            console.log(e.errors)
            return res.status(400)//.json({ errors: e.errors.((err) => err.message)})
        }
        
    }
   
    async select_id(req,res){
        
        try{


            const vaga = await Vaga.findAll({ where: { contratante_id: req.params.id }});
            return res.json(vaga);

        }catch(e){
            return res.json(null)
        }
    }

    async select_home(req,res){
        try{

            console.log(req.params.categoria)

                       
            const vaga = await Vaga.findAll({ where: { categoria: req.params.categoria } });
            return res.json(vaga);

        }catch(e){
            return res.json(null)
        }
    }


    async select(req, res){
        try{
            const vaga = await Vaga.findByPk(req.params.id)
                res.json(vaga);
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

            const vagaAtualizada = await vaga.update(req.body);
            const candidatos = await Candidato.findAll({where: {vaga_id: vaga.id}})
            candidatos.map(async (candidato) => {
                console.log("entrou")
                const prestador = await Prestador.findByPk(candidato.prestador_id)
                const not = {
                    titulo: vaga.titulo,
                    vaga_id: vaga.id,
                    descricao: 'Vaga foi alterada',
                    user_id: prestador.user_id,
    
                }
                const novaNot = await Notificacao.create(not);
                
            })
            

            //const notific = Notificacao.findAll({ where: { user_id: prestador.user_id } })

            
            return res.json(vagaAtualizada);

        }catch(e){
            return res.json(null)
        }
    }

   
}

export default new VagasController();