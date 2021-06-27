"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
_dotenv2.default.config()

require('./database');
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _socketio = require('socket.io'); var _socketio2 = _interopRequireDefault(_socketio);
var _http = require('http'); var _http2 = _interopRequireDefault(_http);
var _homeRoutes = require('./routes/homeRoutes'); var _homeRoutes2 = _interopRequireDefault(_homeRoutes);
var _userRoutes = require('./routes/userRoutes'); var _userRoutes2 = _interopRequireDefault(_userRoutes);
var _contratanteRoutes = require('./routes/contratanteRoutes'); var _contratanteRoutes2 = _interopRequireDefault(_contratanteRoutes);
var _prestadorRoutes = require('./routes/prestadorRoutes'); var _prestadorRoutes2 = _interopRequireDefault(_prestadorRoutes);
var _conexaoRoutes = require('./routes/conexaoRoutes'); var _conexaoRoutes2 = _interopRequireDefault(_conexaoRoutes);
var _mensagemRoutes = require('./routes/mensagemRoutes'); var _mensagemRoutes2 = _interopRequireDefault(_mensagemRoutes);
var _vagaRoutes = require('./routes/vagaRoutes'); var _vagaRoutes2 = _interopRequireDefault(_vagaRoutes);
var _candidatoRoutes = require('./routes/candidatoRoutes'); var _candidatoRoutes2 = _interopRequireDefault(_candidatoRoutes);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);

class App{
    constructor(){
        this.app = _express2.default.call(void 0, )
        this.server = _http2.default.createServer(this.app);
        this.io = _socketio2.default.call(void 0, this.server, {
            cors: true,
            origins:["http://localhost:3000"],
        
        });
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(_express2.default.urlencoded({ extended: true }));
        this.app.use(_express2.default.json())

        this.app.use((req, res, next) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Credentials", "true");
            res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
            res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
            this.app.use(_cors2.default.call(void 0, ));
            next();
        });
    }

    routes(){
        this.app.use('/', _homeRoutes2.default);
        this.app.use('/users/', _userRoutes2.default);
        this.app.use('/contratante/', _contratanteRoutes2.default);
        this.app.use('/prestador/', _prestadorRoutes2.default);
        this.app.use('/conexao', _conexaoRoutes2.default);
        this.app.use('/mensagem', _mensagemRoutes2.default);
        this.app.use('/mensagem', _mensagemRoutes2.default);
        this.app.use('/vaga', _vagaRoutes2.default);
        this.app.use('/candidato', _candidatoRoutes2.default);
    }
}

App = new App()

exports. default = (App);


