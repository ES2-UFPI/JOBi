import Conexao from '../models/Conexao'

class ConexaoController {
    async store(req, res){
        try{
            const novaConexao = await Conexao.create(req.body);

            res.json(novaConexao);
        }catch(e){
            console.log(e)
            //res.status(400).json({ errors: e.errors.map((err) => err.message)})
        }
        
    }
    async index(req,res){
        try{
            const conexao = await Conexao.findAll();
            return res.json(conexao);

        }catch(e){
            return res.json(null)
        }
    }
    async chats_prestador(req,res){
        try{
            const conexao = await Conexao.findAll({ where: {prestador_id: req.body.id} });
            return res.json(conexao);

        }catch(e){
            return res.json(null)
        }
    }

    async chats_contratante(req,res){
        try{
            const conexao = await Conexao.findAll({ where: {contratante_id: req.body.id} });
            return res.json(conexao);

        }catch(e){
            return res.status(400).json(null)
        }
    }

    async delete(req,res){
        try{
            if(!req.params.id){
                return res.status(400).json({ 
                    errors: ['ID não enviado']
                 });
            }

            const conexao = await Conexao.findByPk(req.body);

            if(!user) {
                return res.status(400).json({ 
                    errors: ['Usuário não existe!']
                 })
            }

            await conexao.destroy();
            return res.json(conexao);

        }catch(e){
            return res.status(400).json({ errorserrors: e.erros.map((err)=> err.message) })

        }
    }
}

export default new ConexaoController();