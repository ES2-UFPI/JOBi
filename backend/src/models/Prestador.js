import {Sequelize, Model} from "sequelize";

export default class Prestador extends Model {
    static init(sequelize) {
        super.init({
            estrelas: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
                validate: {
                    notEmpty: {
                        msg: 'Campo não pode ficar vazio',
                      },
                }
            },
            
        },{
            sequelize,
            tableName: 'prestadores',
        });
        return this;
    }
    static associate_1(models){
        this.belongsTo(models.Prestador, { foreignKey: 'user_id' });
    }
}