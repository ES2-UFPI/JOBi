'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('candidatos', { 
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    vaga_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'vagas',
        key: 'id',
      }, 
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    prestador_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'prestadores',
        key: 'id',
      }, 
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    proposta: {
      type: Sequelize.FLOAT,  
      allowNull: true,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    });
  },

  down: async (queryInterface, Sequelize) => {
     return await queryInterface.dropTable('candidatos');
  }
};
