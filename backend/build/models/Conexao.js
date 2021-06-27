"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');

 class Conexao extends _sequelize.Model {
    static init(sequelize) {
        super.init({
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
    
} exports.default = Conexao;