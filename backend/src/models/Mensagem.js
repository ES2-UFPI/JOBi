import {Sequelize, Model} from "sequelize";

export default class Mensagem extends Model {
    static init(sequelize) {
        super.init({
            texto: {
                type: Sequelize.STRING(1234),
                defaultValue: '',
                validate: {
                    len: {
                        args: [1, 1234],
                        msg: "Campo nome deve ter entre 1 e 1234 caracteres."
                    }
                }
            },
            emissor: {
                type: Sequelize.INTEGER,
                defaultValue: '',
            },
            is_prest: {
                type: Sequelize.INTEGER,
                defaultValue: '',
            },
        },{
            sequelize,
            tableName: 'mensagens',
        });
        return this;
    }
    static associate(models) {
        this.belongsTo(models.Conexao, { foreignKey: 'conexao_id' })

    }
    
}