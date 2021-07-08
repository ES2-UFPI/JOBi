import {Sequelize, Model} from "sequelize"; 

export default class Candidato extends Model {
    static init(sequelize) {
        super.init({
            proposta: {
                type: Sequelize.FLOAT,
                defaultValue: 1,
            },
            contratado: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
        },{ 
            sequelize,
            tableName: 'candidatos',
        });
        return this;
    }
    static associate(models) {
        this.belongsTo(models.Prestador, { foreignKey: 'prestador_id' });
        this.belongsTo(models.Vaga, { foreignKey: 'vaga_id' })

    }
    
}