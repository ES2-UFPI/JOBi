import {Sequelize, Model} from "sequelize"; 

export default class Relatorio_vagas_fechadas extends Model {
    static init(sequelize) {
        super.init({
            Titulos: {
                type: Sequelize.STRING,
                defaultValue: 1,
            },
            Descricao: {
                type: Sequelize.STRING,
                defaultValue: false,
            },
            Remuneracao: {
                type: Sequelize.FLOAT,
                defaultValue: false,
            },
            Localizacao: {
                type: Sequelize.STRING,
                defaultValue: '',
            },
           
        },{ 
            sequelize,
            tableName: 'relatorio_vagas_fechadas',
        });
        Relatorio_vagas_fechadas.removeAttribute('id')
        Relatorio_vagas_fechadas.removeAttribute('created_at')
        Relatorio_vagas_fechadas.removeAttribute('updated_at')
        Relatorio_vagas_fechadas.removeAttribute('updatedAt')
        return this;
    }
    
}