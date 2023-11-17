import {ServicioHabitacion} from '../services/ServicioHabitacion.js'

export class ControladorHabitacion{
    constructor(){}

    async buscarTodas(request,response){
        try{
            let servicioHabitacion=new ServicioHabitacion()
            //1.Hay que recibir datos
            //2. Intentare conectarme a la BD
            //3. Envio la respuesta
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito buscando las habitaciones",
                "data":await servicioHabitacion.buscarTodas()
            })
        }catch(error){esponse.status(400).json({
            "estado":false,
            "mensaje":"Fallamos buscando las habitaciones"+error,
            "data":null
        })}
    }
    async buscarPorId(request,response){
        try{
            let servicioHabitacion=new ServicioHabitacion()
            //1. Hay que recibir datos?(Si)
            let id=request.params.id
            //2. Con el id que mando el cliente busco la habitacion BD
            //3. Respondo al cliente
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito buscando la habitacion",
                "data":await servicioHabitacion.buscarPorID(id)
            })
        }catch(error){esponse.status(400).json({
            "estado":false,
            "mensaje":"Fallamos buscando la habitacion"+error,
            "data":null
        })}
    }
    async modificar(request,response){
        try{
            let servicioHabitacion=new ServicioHabitacion()
            //1. Hay que recibir datos?(Si)
            let id=request.params.id
            let datosModificar=request.body
            await servicioHabitacion.modificar(id,datosModificar) //ESTO
            //2. Modificar en BD
            //3. Enviar respuesta
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito modificando la habitacion",
                "data":null
            })
        }catch(error){response.status(400).json({
            "estado":false,
            "mensaje":"Fallamos modificando la habitacion"+error,
            "data":null
        })}
    }
    async registrar(request,response){
        try{
            let servicioHabitacion=new ServicioHabitacion()
            //1. Hay que recirbir datos?(Si)
            let datosRegistrar=request.body
            
            await servicioHabitacion.registrar(datosRegistrar)
            //2. Guardelos en BD
            //3. Responda
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito registrando la habitacion",
                "data":datos,
                "diferencia":"calcular diferencia del dia"
            })
        }catch(error){response.status(400).json({
            "estado":false,
            "mensaje":"Fallamos registrando la habitacion"+error,
            "data":null
        })}
    }
    async eliminar(request,response){
        try{
            let servicioHabitacion=new ServicioHabitacion()
            //1. Hay que recibir datos?(Si)
            let id=request.params.id
            //2. Eliminelo de la BD
            //3. Responda
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito borrando la habitacion",
                "data":null
            })
        }catch(error){response.status(400).json({
            "estado":false,
            "mensaje":"Fallamos eliminando la habitacion"+error,
            "data":null
        })}
    }
}