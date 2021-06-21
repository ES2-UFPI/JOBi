'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('vagas', { 
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    contratante_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'contratantes',
        key: 'id',
      }, 
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    },
    categoria: {
      type: Sequelize.STRING,  
      allowNull: false,
    },
    num_vagas: {
      type: Sequelize.INTEGER,  
      allowNull: false,
    },
    descricao: {
      type: Sequelize.STRING,  
      allowNull: false,
    },
    imagem: {
      type: Sequelize.STRING,  
      allowNull: true,
    },
    interesses: {
      type: Sequelize.STRING,  
      allowNull: false,
    },
    horario: {
      type: Sequelize.INTEGER,  
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
     return await queryInterface.dropTable('vagas');
  }
};
