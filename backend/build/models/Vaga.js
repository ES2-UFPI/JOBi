"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');

 class Vaga extends _sequelize.Model {
    static init(sequelize) {
        super.init({
            categoria: {
                type: _sequelize.Sequelize.INTEGER,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo não pode ficar vazio',
                      },
                }
            },
            num_vagas: {
                type: _sequelize.Sequelize.INTEGER,
                defaultValue: 1,
            },
            descricao: {
                type: _sequelize.Sequelize.STRING(1234),
                defaultValue: '',
                validate: {
                    len: {
                        args: [1, 1234],
                        msg: "Campo nome deve ter entre 1 e 1234 caracteres."
                    }
                }
            },
            interesses: {
                type: _sequelize.Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [1, 250],
                        msg: "Campo nome deve ter entre 1 e 250 caracteres."
                    }
                }
            }, 
            horario: {
                type: _sequelize.Sequelize.INTEGER,
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
    
} exports.default = Vaga;