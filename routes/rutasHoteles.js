//Espacio para definir las rutas o endpoints especificos de su API
import express from "express";

export let rutasAPI = express.Router()

//importo los controladores
import { ControladorHabitacion} from "../controllers/ControladorHabitacion.js";
let controladorHabitacion=new ControladorHabitacion();

import {ControladorReserva} from "../controllers/ControladorReserva.js"
let controladorReserva=new ControladorReserva();

//Aca pone sus end-points
rutasAPI.post('/api/habitaciones', controladorHabitacion.registrar)

rutasAPI.get('/api/habitaciones', controladorHabitacion.buscarTodas)
  
rutasAPI.get('/api/habitacion/:id', controladorHabitacion.buscarPorId)
  
rutasAPI.put('/api/habitaciones/:id', controladorHabitacion.modificar)
  
rutasAPI.delete('/api/habitaciones/:id', controladorHabitacion.eliminar)


rutasAPI.post('/api/reservas', controladorReserva.registrar)

rutasAPI.get('/api/reservas', controladorReserva.buscarTodas)
  
rutasAPI.get('/api/reserva/:id', controladorReserva.buscarPorId)
  
rutasAPI.put('/api/reservas/:id', controladorReserva.modificar)
  
rutasAPI.delete('/api/reservas/:id', controladorHabitacion.eliminar)