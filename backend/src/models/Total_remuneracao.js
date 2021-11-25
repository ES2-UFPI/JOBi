import {Sequelize, Model} from "sequelize"; 

export default class Total_remuneracao extends Model {
    static init(sequelize) {
        super.init({
            remuneracao_total_vagas_fechadas: {
                type: Sequelize.INTEGER,
                defaultValue: 1,
            },       
        },{ 
            sequelize,
            tableName: 'total_remuneracao',
        });
        Total_remuneracao.removeAttribute('id')
        Total_remuneracao.removeAttribute('created_at')
        Total_remuneracao.removeAttribute('updated_at')
        Total_remuneracao.removeAttribute('updatedAt')
        return this;
    }
    
}