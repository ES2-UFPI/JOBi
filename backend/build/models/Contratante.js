"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');

 class Contratante extends _sequelize.Model {
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
            
        },{
            sequelize,
            tableName: 'contratantes',
        });
        return this;
    }
    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id' });
        this.hasMany(models.Conexao, { foreignKey: 'contratante_id' });
        this.hasMany(models.Vaga, { foreignKey: 'contratante_id' });
    }
} exports.default = Contratante;