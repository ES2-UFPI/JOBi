import Sequelize from "sequelize";
import databaseConfig from '../config/database';
import User from '../models/User';
import Contratante from '../models/Contratante';
import Prestador from '../models/Prestador';
import Conexao from '../models/Conexao';
import Mensagem from '../models/Mensagem';
import Vaga from '../models/Vaga';
import Candidato from '../models/Candidato';
import Notificacao from '../models/Notificacao';
import Relatorio_conexoes from '../models/Relatorio_conexoes';
import Relatorio_contratantes from '../models/Relatorio_contratantes';
import Relatorio_prestadores from '../models/Relatorio_prestadores';
import Relatorio_vagas_abertas from '../models/Relatorio_vagas_abertas';
import Relatorio_vagas_fechadas from '../models/Relatorio_vagas_fechadas';
import Total_remuneracao from "../models/Total_remuneracao";
 
const models = [User, Contratante, Prestador, Conexao, Mensagem, Vaga,
     Candidato, Notificacao, Relatorio_conexoes, Relatorio_contratantes,
     Relatorio_prestadores, Relatorio_vagas_abertas, Relatorio_vagas_fechadas, 
     Total_remuneracao];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
