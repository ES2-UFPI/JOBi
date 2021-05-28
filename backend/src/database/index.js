import Sequelize from "sequelize";
import databaseConfig from '../config/database';
import User from '../models/User';
import Contratante from '../models/Contratante';
import Prestador from '../models/Prestador';
import Conexao from '../models/Conexao';
import Mensagem from '../models/Mensagem';

const models = [User, Contratante, Prestador, Conexao, Mensagem]

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
//models.forEach((model) => model.associate_1 && model.associate_1(connection.models));