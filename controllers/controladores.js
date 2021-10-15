// el controlador es el encargado de administrar las peticiones y respuesta

const {request, response}= require('express')

//crear un funcion para cada operacion del servidor

function registrarJugador(peticion=request, respuesta=response) {

    //nombre//edad//posicion//dorsal//equipo
    let datosPeticion=peticion.body

    respuesta.json
    ({
        mensaje:"registrando el jugador",
        datos:datosPeticion
    })

}

function buscarJugador(peticion=request, respuesta=response){

    //recibir el id a buscar
    let id=peticion.params.id

    respuesta.json
    ({
        mensaje:"buscando el jugador: "+id
    })
    
}

function buscarJugadores(peticion=request, respuesta=response){
    
    respuesta.json
    ({
        mensaje:"buscando los jugadores"
    })

}

function editarJugador(peticion=request, respuesta=response){
    //recibir el id a editar
    let id=peticion.params.id

    let datosPeticion=peticion.body

    respuesta.json
    ({
        mensaje:"editando el jugador: "+id
    })

}

function eliminarJugador(peticion=request, respuesta=response){
    //recibir el id a eliminar
    let id=peticion.params.id
    respuesta.json
    ({
        mensaje:"eliminando el jugador: "+id
    })

}

module.exports = {

    registrarJugador,
    buscarJugador,
    buscarJugadores,
    editarJugador,
    eliminarJugador

}