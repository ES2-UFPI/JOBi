import {Sequelize, Model} from "sequelize";

export default class Notificacao extends Model {
    static init(sequelize) {
        super.init({
            titulo: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [1, 250],
                        msg: "Campo nome deve ter entre 1 e 250 caracteres."
                    }
                }
            }, 
            descricao: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [1, 250],
                        msg: "Campo nome deve ter entre 1 e 250 caracteres."
                    }
                }
            },
            visualizado: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
        },{
            sequelize,
            tableName: 'notificacoes',
        });
        return this;
    }
    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id' });
        this.belongsTo(models.Candidato, { foreignKey: 'vaga_id' })

    }
    
}