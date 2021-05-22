import {Sequelize, Model} from "sequelize";

export default class Contratante extends Model {
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
            tableName: 'contratantes',
        });
        return this;
    }
    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id' });
    }
}