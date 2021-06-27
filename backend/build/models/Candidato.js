"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize'); 

 class Candidato extends _sequelize.Model {
    static init(sequelize) {
        super.init({
            proposta: {
                type: _sequelize.Sequelize.FLOAT,
                defaultValue: 1,
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
    
} exports.default = Candidato;