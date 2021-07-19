import {Sequelize, Model} from "sequelize";

export default class Conexao extends Model {
    static init(sequelize) {
        super.init({
            prestador_nome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: "Campo nome deve ter entre 3 e 255 caracteres."
                    }
                }
            },
            contratante_nome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: "Campo nome deve ter entre 3 e 255 caracteres."
                    }
                }
            },
            prestador_img: {
                type: Sequelize.STRING,
                defaultValue: 'default',
            },
            contratante_img: {
                type: Sequelize.STRING,
                defaultValue: 'default',
            },
        },{
            sequelize,
            tableName: 'conexoes',
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