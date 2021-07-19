import Sequelize from "sequelize";
import databaseConfig from '../config/database';
import User from '../models/User';
import Contratante from '../models/Contratante';
import Prestador from '../models/Prestador';
import Conexao from '../models/Conexao';
import Mensagem from '../models/Mensagem';
import Vaga from '../models/Vaga';
import Candidato from '../models/Candidato';
import Notificacao from '../models/Notificacao'
 
const models = [User, Contratante, Prestador, Conexao, Mensagem, Vaga, Candidato, Notificacao];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
