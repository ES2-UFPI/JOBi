'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return await queryInterface.createTable('contratantes', { 
       id: {
         type: Sequelize.INTEGER,
         allowNull: false,
         autoIncrement: true,
         primaryKey: true,
      },
      estrelas: {
          type: Sequelize.INTEGER,
          allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
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
     return await queryInterface.dropTable('contratantes');
  }
};
