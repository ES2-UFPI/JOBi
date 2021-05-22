import Sequelize from "sequelize";
import databaseConfig from '../config/database';
import User from '../models/User';
import Contratante from '../models/Contratante';

const models = [User, Contratante]

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
