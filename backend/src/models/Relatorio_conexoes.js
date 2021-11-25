import {Sequelize, Model} from "sequelize"; 

export default class Relatorio_conexoes extends Model {
    static init(sequelize) {
        super.init({
            Conexao: {
                type: Sequelize.INTEGER,
                defaultValue: 1,
            },
            Contratante: {
                type: Sequelize.STRING,
                defaultValue: false,
            },
            Prestador: {
                type: Sequelize.STRING,
                defaultValue: '',
            },
           
        },{ 
            sequelize,
            tableName: 'relatorio_conexoes',
        });
        Relatorio_conexoes.removeAttribute('id')
        Relatorio_conexoes.removeAttribute('created_at')
        Relatorio_conexoes.removeAttribute('updated_at')
        Relatorio_conexoes.removeAttribute('updatedAt')
        return this;
    }
    
}