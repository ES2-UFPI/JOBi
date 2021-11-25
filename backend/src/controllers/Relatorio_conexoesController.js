import Relatorio_conexoes from '../models/Relatorio_conexoes'
import Relatorio_contratantes from '../models/Relatorio_contratantes';
import Relatorio_prestadores from '../models/Relatorio_prestadores';
import Relatorio_vagas_abertas from '../models/Relatorio_vagas_abertas';
import Relatorio_vagas_fechadas from '../models/Relatorio_vagas_fechadas';
import Total_remuneracao from "../models/Total_remuneracao";

class Relatorio_conexoesController {
    
    async index(req,res){
        try{
            const conexoes = await Relatorio_conexoes.findAll();
            //console.log(conexoes)
            const contratantes = await Relatorio_contratantes.findAll();
            const prestadores = await Relatorio_prestadores.findAll();
            const vagas_a = await Relatorio_vagas_abertas.findAll();
            const vagas_f = await Relatorio_vagas_fechadas.findAll();
            const remuneracao = await Total_remuneracao.findAll();
            const mensagem = {conexoes: conexoes, contratantes: contratantes, prestadores: prestadores, vagas_a: vagas_a, vagas_f:vagas_f, remuneracao: remuneracao}
            return res.json(mensagem);

        }catch(e){
            return res.json(e)
        }
    }

}

export default new Relatorio_conexoesController();