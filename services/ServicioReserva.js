import {modeloReserva} from '../models/modeloReservas.js'

export class ServicioReserva{

    constructor(){}

    async buscarTodas(){
        let reservas=await modeloReserva.find()
        return reservas
    }
    async buscarPorID(id){
        let reserva=await modeloReserva.findById(id)
        return reserva
    }
    async modificar(id,datos){
        return await modeloReserva.findByIdAndUpdate(id,datos)
    }
    async registrar(datos){
        let reservaNueva=new modeloReserva(datos)
        return await reservaNueva.save()
    }
    async eliminar(id){
        return await modeloReserva.findByIdAndDelete(id,datos)
    }

}