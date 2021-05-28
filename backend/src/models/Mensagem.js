import {Sequelize, Model} from "sequelize";

export default class Mensagem extends Model {
    static init(sequelize) {
        super.init({
            id_Socket: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo não pode ficar vazio',
                      },
                }
            },
            text: {
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
        },{
            sequelize
        });
        return this;
    }
    static associate(models) {
        this.belongsTo(models.Prestador, { foreignKey: 'prestador_id' });
        this.belongsTo(models.Contratante, { foreignKey: 'contratante_id' });

    }
    //static associate_4(models) {
    //    this.belongsTo(models.Contratante, { foreignKey: 'contratante_id' });
    //}
    
}