"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');

 class Prestador extends _sequelize.Model {
    static init(sequelize) {
        super.init({
            estrelas: {
                type: _sequelize.Sequelize.INTEGER,
                defaultValue: 0,
                validate: {
                    notEmpty: {
                        msg: 'Campo não pode ficar vazio',
                      },
                }
            },
            categoria: {
                type: _sequelize.Sequelize.INTEGER,
                defaultValue: 0,
                validate: {
                    notEmpty: {
                        msg: 'Campo não pode ficar vazio',
                      },
                },
            },
            curriculo: {
                type: _sequelize.Sequelize.STRING,
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
} exports.default = Prestador;