"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');

 class User extends _sequelize.Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: _sequelize.Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: "Campo nome deve ter entre 3 e 255 caracteres."
                    }
                }
            },
            senha: {
                type: _sequelize.Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [6, 50],
                        msg: "Campo nome deve ter entre 6 e 50 caracteres."
                    }
                },
            },
            email: {
                type: _sequelize.Sequelize.STRING,
                defaultValue: '',
                unique: {
                    msg: "Email já existe!"
                },
                validate: {
                    isEmail: {
                        msg: "Email inválido!"
                    }
                },
            },
            telefone: {
                type: _sequelize.Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [8, 255],
                        msg: "Campo telefone deve ter mais de 8 caracteres."
                    }
                },
            },
            endereco: {
                type: _sequelize.Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 1000],
                        msg: "Campo endereco deve ter entre 3 e 1000 caracteres."
                    }
                },
            },
            descricao: {
                type: _sequelize.Sequelize.STRING,
                defaultValue: '',
            },
            status: {
                type: _sequelize.Sequelize.INTEGER,
                defaultValue: 0,
            },
            img_perfil: {
                type: _sequelize.Sequelize.STRING,
                defaultValue: 'default',
            }, 
        },{
            sequelize
        });
        return this;
    }
    static associate(models) {
        this.hasMany(models.Contratante, { foreignKey: 'user_id' });
        this.hasMany(models.Prestador, { foreignKey: 'user_id' });
      }
    
    //static associate_1(models){
    //    this.hasMany(models.Prestador, { foreignKey: 'user_id' });
    //}
    
} exports.default = User;