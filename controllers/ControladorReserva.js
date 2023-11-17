import {ServicioReserva} from '../services/ServicioReserva.js'

export class ControladorReserva{
    constructor(){}

    async buscarTodas(request,response){
        try{
            let servicioReserva=new ServicioReserva()
            //1.Hay que recibir datos
            //2. Intentare conectarme a la BD
            //3. Envio la respuesta
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito buscando las reservas",
                "data":await servicioReserva.buscarTodas()
            })
        }catch(error){response.status(400).json({
            "estado":false,
            "mensaje":"Fallamos buscando las reservas"+error,
            "data":null
        })}
    }
    async buscarPorId(request,response){
        try{
            let servicioReserva=new ServicioReserva()
            //1. Hay que recibir datos?(Si)
            let id=request.params.id
            //2. Con el id que mando el cliente busco la habitacion BD
            //3. Respondo al cliente
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito buscando la reserva",
                "data":await servicioReserva.buscarPorID(id)
            })
        }catch(error){response.status(400).json({
            "estado":false,
            "mensaje":"Fallamos buscando la habitacion"+error,
            "data":null
        })}
    }
    async modificar(request,response){
        try{
            let servicioReserva=new ServicioReserva()
            //1. Hay que recibir datos?(Si)
            let id=request.params.id
            let datosModificar=request.body
            await servicioReserva.modificar(id,datosModificar) //ESTO
            //2. Modificar en BD
            //3. Enviar respuesta
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito modificando la reserva",
                "data":null
            })
        }catch(error){response.status(400).json({
            "estado":false,
            "mensaje":"Fallamos modificando la reserva"+error,
            "data":null
        })}
    }
    async registrar(request,response){
        try{
            let servicioReserva=new ServicioReserva()
            //1. Hay que recirbir datos?(Si)
            let datosRegistrar=request.body
            
            //await servicioReserva.registrar(datos)
            //2. Guardelos en BD
            //3. Responda
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito registrando la reserva",
                "data":datos,
                "diferencia":"calcular diferencia del dia"
            })
        }catch(error){response.status(400).json({
            "estado":false,
            "mensaje":"Fallamos registrando la reserva"+error,
            "data":null
        })}
    }
    async eliminar(request,response){
        try{
            let servicioReserva=new ServicioReserva()
            //1. Hay que recibir datos?(Si)
            let id=request.params.id
            //2. Eliminelo de la BD
            //3. Responda
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito borrando la reserva",
                "data":null
            })
        }catch(error){response.status(400).json({
            "estado":false,
            "mensaje":"Fallamos eliminando la reserva"+error,
            "data":null
        })}
    }
}