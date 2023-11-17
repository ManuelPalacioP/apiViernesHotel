//Esta clase representa un servidor
import express from "express"
import cors from 'cors'
import { rutasAPI } from "./routes/rutasHoteles.js";

import { establecerConexionBD } from "./database/conexion.js";


export class Api{

    constructor(){
        this.app = express();
        this.conectarBD()
        this.procesarPeticiones();
    }

    //1. Levantar el servidor
    levantarServidor(params) {
        this.app.listen(process.env.PORT,function(){
            console.log("servidor operando")
        })
    }

    //2. Atiende peticiones y responde
    procesarPeticiones(){
        this.app.use(cors())
        this.app.use("/",rutasAPI)
        this.app.use(express.json())
    }
    //3. Se conecta a la Base de Datos
    conectarBD(){
        establecerConexionBD()
    }

}
