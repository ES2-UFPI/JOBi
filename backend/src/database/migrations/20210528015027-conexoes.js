'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return await queryInterface.createTable('conexoes', { 
       id: {
         type: Sequelize.INTEGER,
         allowNull: false,
         autoIncrement: true,
         primaryKey: true,
      },
      id_Socket: {
          type: Sequelize.STRING,
          allowNull: false,
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
     return await queryInterface.dropTable('conexoes');
  }
};
