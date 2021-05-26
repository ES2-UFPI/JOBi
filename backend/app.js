import dotenv from "dotenv"
dotenv.config()

import './src/database'
import express from "express"
import homeRoutes from "./src/routes/homeRoutes";
import userRoutes from "./src/routes/userRoutes";
import contratanteRoutes from "./src/routes/contratanteRoutes";
import prestadorRoutes from "./src/routes/prestadorRoutes";
import cors from 'cors'

class App{
    constructor(){
        this.app = express()
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
            app.use(cors());
            next();
        });
    }

    routes(){
        this.app.use('/', homeRoutes)
        this.app.use('/users/', userRoutes)
        this.app.use('/contratante/', contratanteRoutes)
        this.app.use('/prestador', prestadorRoutes)
    }
}

App = new App()

export default(App.app);


