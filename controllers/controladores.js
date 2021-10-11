// el controlador es el encargado de administrar las peticiones y respuesta

const {request, response}= require('express')

//crear un funcion para cada operacion del servidor

function registrarJugador(peticion=request, respuesta=response) {

    respuesta.json
    ({
        mensaje:"registrando el jugador"
    })

}

function buscarJugador(peticion=request, respuesta=response){

    respuesta.json
    ({
        mensaje:"buscando el jugador"
    })
    
}

function buscarJugadores(peticion=request, respuesta=response){
    
    respuesta.json
    ({
        mensaje:"buscando los jugadores"
    })

}

function editarJugador(peticion=request, respuesta=response){
 
    respuesta.json
    ({
        mensaje:"editando el jugador"
    })

}

function eliminarJugador(peticion=request, respuesta=response){
    
    respuesta.json
    ({
        mensaje:"eliminando el jugador"
    })

}

module.exports = {

    registrarJugador,
    buscarJugador,
    buscarJugadores,
    editarJugador,
    eliminarJugador

}