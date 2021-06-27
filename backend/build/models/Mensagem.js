"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');

 class Mensagem extends _sequelize.Model {
    static init(sequelize) {
        super.init({
            texto: {
                type: _sequelize.Sequelize.STRING(1234),
                defaultValue: '',
                validate: {
                    len: {
                        args: [1, 1234],
                        msg: "Campo nome deve ter entre 1 e 1234 caracteres."
                    }
                }
            },
            emissor: {
                type: _sequelize.Sequelize.INTEGER,
                defaultValue: '',
            },
            is_prest: {
                type: _sequelize.Sequelize.INTEGER,
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
    
} exports.default = Mensagem;