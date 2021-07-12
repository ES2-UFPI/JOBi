import {Sequelize, Model} from "sequelize";

export default class Vaga extends Model {
    static init(sequelize) {
        super.init({
            categoria: {
                type: Sequelize.INTEGER,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo não pode ficar vazio',
                      },
                }
            },
            num_vagas: {
                type: Sequelize.INTEGER,
                defaultValue: 1,
            },
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
            imagem: {
                type: Sequelize.STRING,
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
            remuneracao: {
                type: Sequelize.FLOAT,
                defaultValue: 0,
            },
            estado: {
                type: Sequelize.STRING,
            }, 
            cidade: {
                type: Sequelize.STRING,
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