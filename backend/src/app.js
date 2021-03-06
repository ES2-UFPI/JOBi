import dotenv from "dotenv"
dotenv.config()

import './database'
import express from "express"
import socketio from "socket.io";
import http from "http";
import homeRoutes from "./routes/homeRoutes";
import userRoutes from "./routes/userRoutes";
import contratanteRoutes from "./routes/contratanteRoutes";
import prestadorRoutes from "./routes/prestadorRoutes";
import conexaoRoutes from "./routes/conexaoRoutes";
import mensagemRoutes from "./routes/mensagemRoutes";
import vagaRoutes from "./routes/vagaRoutes";
import candidatoRoutes from "./routes/candidatoRoutes";
import notificacaoRoutes from "./routes/notificacaoRoutes";
import cors from 'cors';
import fileupload from "express-fileupload";

class App{
    constructor(){
        this.app = express()
        this.server = http.createServer(this.app);
        this.io = socketio(this.server, {
            cors: true,
            origins:["http://localhost:3000"],
        
        });
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json())

        this.app.use((req, res, next) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Credentials", "true");
            res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
            res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
            this.app.use(cors());
            next();
        });

        this.app.use(fileupload());
        this.app.use(express.static("files"));
    }

    routes(){
        this.app.use('/', homeRoutes);
        this.app.use('/users/', userRoutes);
        this.app.use('/contratante/', contratanteRoutes);
        this.app.use('/prestador/', prestadorRoutes);
        this.app.use('/conexao', conexaoRoutes);
        this.app.use('/mensagem', mensagemRoutes);
        this.app.use('/mensagem', mensagemRoutes);
        this.app.use('/vaga', vagaRoutes);
        this.app.use('/candidato', candidatoRoutes);
        this.app.use('/notificacao', notificacaoRoutes);
    }
}

App = new App()

export default (App);


