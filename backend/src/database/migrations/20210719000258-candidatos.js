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
    contratado: {
      type: Sequelize.BOOLEAN,  
      allowNull: false,
    },
    nome: {
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
   descricao: {
    type: Sequelize.STRING,
    allowNull: false,
   },
    img_perfil: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    estrelas: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    categoria: {
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
     return await queryInterface.dropTable('candidatos');
  }
};
