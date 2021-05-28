import {Sequelize, Model} from "sequelize";

export default class Conexao extends Model {
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