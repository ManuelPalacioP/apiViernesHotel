import mongoose from "mongoose";

export async function establecerConexionBD(){
    try{
        await mongoose.connect(process.env.DATABASE)
        console.log("exito en la conexión")
    }catch(error){
        console.log("error: "+error)
    }
}