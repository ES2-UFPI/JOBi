"use strict";'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return await queryInterface.createTable('users', { 
       id: {
         type: Sequelize.INTEGER,
         allowNull: false,
         autoIncrement: true,
         primaryKey: true,
      },
      nome: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false,
    },
      email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
   },
      telefone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    endereco: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    descricao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    status: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    img_perfil: {
      type: Sequelize.STRING,
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
     return await queryInterface.dropTable('users');
  }
  
};
