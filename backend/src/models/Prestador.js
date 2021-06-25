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
            curriculo: {
                type: Sequelize.STRING,
            },
            
        },{
            sequelize,
            tableName: 'prestadores',
        });
        return this;
    }
    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'user_id' });
        this.hasMany(models.Conexao, { foreignKey: 'prestador_id' });
        this.hasMany(models.Candidato, { foreignKey: 'prestador_id' });
    }
}