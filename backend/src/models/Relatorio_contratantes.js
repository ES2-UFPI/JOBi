import {Sequelize, Model} from "sequelize"; 

export default class Relatorio_contratantes extends Model {
    static init(sequelize) {
        super.init({
            Contratante: {
                type: Sequelize.STRING,
                defaultValue: "",
            },
            Email: {
                type: Sequelize.STRING,
                defaultValue: false,
            },
            Estrelas: {
                type: Sequelize.INTEGER,
                defaultValue: '',
            },
           
        },{ 
            sequelize,
            tableName: 'relatorio_contratantes',
        });
        Relatorio_contratantes.removeAttribute('id')
        Relatorio_contratantes.removeAttribute('created_at')
        Relatorio_contratantes.removeAttribute('updated_at')
        Relatorio_contratantes.removeAttribute('updatedAt')
        return this;
    }
    
}