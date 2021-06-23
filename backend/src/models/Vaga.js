import {Sequelize, Model} from "sequelize";

export default class Vaga extends Model {
    static init(sequelize) {
        super.init({
            categoria: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [1, 250],
                        msg: "Campo nome deve ter entre 1 e 250 caracteres."
                    }
                }
            },
            num_vagas: {
                type: Sequelize.INTEGER,
                defaultValue: 1,
            },
            descricao: {
                type: Sequelize.STRING(1234),
                defaultValue: '',
                validate: {
                    len: {
                        args: [1, 1234],
                        msg: "Campo nome deve ter entre 1 e 1234 caracteres."
                    }
                }
            },
            interesses: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [1, 250],
                        msg: "Campo nome deve ter entre 1 e 250 caracteres."
                    }
                }
            }, 
            horario: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
            },
        },{
            sequelize,
            tableName: 'vagas',
        });
        return this;
    }
    static associate(models) {
        this.belongsTo(models.Contratante, { foreignKey: 'contratante_id' });
        this.hasMany(models.Candidato, { foreignKey: 'vaga_id' })

    }
    
}