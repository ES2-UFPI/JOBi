import dotenv from "dotenv"
dotenv.config()

import './src/database'
import express from "express"
import homeRoutes from "./src/routes/homeRoutes";
import userRoutes from "./src/routes/userRoutes";
import contratanteRoutes from "./src/routes/contratanteRoutes";
import prestadorRoutes from "./src/routes/prestadorRoutes";

class App{
    constructor(){
        this.app = express()
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json())
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


