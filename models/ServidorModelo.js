const express = require('express')
class ServidorModelo{

    constructor(){
        
        this.app = express()
        this.enrutarPeticiones()

    }

    despertarServidor(){

        this.app.listen(process.env.PUERTO,function () {
            console.log("servidor encendido: "+process.env.PUERTO)
        })

    }

    enrutarPeticiones(){

        this.app.get('/avanzada/v1/jugadores', function (req, res) {
            res.send('Estoy procesando un GET () buscar')
          })
          
        this.app.post('/avanzada/v1/jugadores', function (req, res) {
              res.send('Estoy procesando un POST () insertar')
          })
          
        this.app.put('/avanzada/v1/jugadores', function (req, res) {
              res.send('Estoy procesando un PUT () editando')
          })
          
        this.app.delete('/avanzada/v1/jugadores', function (req, res) {
              res.send('Estoy procesando un DELETE () eliminar')
          })

    }

    despertarBD(){

    }



}

module.exports =ServidorModelo