'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('notificacoes', { 
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
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      }, 
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    titulo: {
      type: Sequelize.STRING,  
      allowNull: false,
    },
    descricao: {
      type: Sequelize.STRING,  
      allowNull: false,
    },
    visualizado: {
      type: Sequelize.BOOLEAN,  
      allowNull: false,
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
     return await queryInterface.dropTable('notificacoes');
  }
};