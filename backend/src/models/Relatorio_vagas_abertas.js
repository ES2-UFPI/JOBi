import {Sequelize, Model} from "sequelize"; 

export default class Relatorio_vagas_abertas extends Model {
    static init(sequelize) {
        super.init({
            Titulos: {
                type: Sequelize.STRING,
                defaultValue: "",
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
            tableName: 'relatorio_vagas_abertas',
        });
        Relatorio_vagas_abertas.removeAttribute('id')
        Relatorio_vagas_abertas.removeAttribute('created_at')
        Relatorio_vagas_abertas.removeAttribute('updated_at')
        Relatorio_vagas_abertas.removeAttribute('updatedAt')
        return this;
    }
    
}