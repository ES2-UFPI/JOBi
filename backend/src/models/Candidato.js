import {Sequelize, Model} from "sequelize"; 

export default class Candidato extends Model {
    static init(sequelize) {
        super.init({
            proposta: {
                type: Sequelize.FLOAT,
                defaultValue: 1,
            },
            contratado: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            nome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: "Campo nome deve ter entre 3 e 255 caracteres."
                    }
                }
            },
            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    isEmail: {
                        msg: "Email inválido!"
                    }
                },
            },
            telefone: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [8, 255],
                        msg: "Campo telefone deve ter mais de 8 caracteres."
                    }
                },
            },
            descricao: {
                type: Sequelize.STRING,
                defaultValue: '',
            },
            img_perfil: {
                type: Sequelize.STRING,
                defaultValue: 'default',
            },
            estrelas: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
                validate: {
                    notEmpty: {
                        msg: 'Campo não pode ficar vazio',
                      },
                }
            },
            categoria: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
                validate: {
                    notEmpty: {
                        msg: 'Campo não pode ficar vazio',
                      },
                },
            },
        },{ 
            sequelize,
            tableName: 'candidatos',
        });
        return this;
    }
    static associate(models) {
        this.belongsTo(models.Prestador, { foreignKey: 'prestador_id' });
        this.belongsTo(models.Vaga, { foreignKey: 'vaga_id' })

    }
    
}