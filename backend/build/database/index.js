"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _Contratante = require('../models/Contratante'); var _Contratante2 = _interopRequireDefault(_Contratante);
var _Prestador = require('../models/Prestador'); var _Prestador2 = _interopRequireDefault(_Prestador);
var _Conexao = require('../models/Conexao'); var _Conexao2 = _interopRequireDefault(_Conexao);
var _Mensagem = require('../models/Mensagem'); var _Mensagem2 = _interopRequireDefault(_Mensagem);
var _Vaga = require('../models/Vaga'); var _Vaga2 = _interopRequireDefault(_Vaga);
var _Candidato = require('../models/Candidato'); var _Candidato2 = _interopRequireDefault(_Candidato);
 
const models = [_User2.default, _Contratante2.default, _Prestador2.default, _Conexao2.default, _Mensagem2.default, _Vaga2.default, _Candidato2.default];

const connection = new (0, _sequelize2.default)(_database2.default);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
