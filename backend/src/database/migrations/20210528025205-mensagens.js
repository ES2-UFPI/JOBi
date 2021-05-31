'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return await queryInterface.createTable('mensagens', { 
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    prestador_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'prestadores',
        key: 'id',
      }, 
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    contratante_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'contratantes',
        key: 'id',
      }, 
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    text: {
      type: Sequelize.STRING(1234),  
      allowNull: false,
    },
    emissor: {
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
     return await queryInterface.dropTable('mensagens');
  }
};
