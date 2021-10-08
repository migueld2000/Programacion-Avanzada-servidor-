//importar la clase de express(router)
const{Router}= require('express')

//usar la clase de express(router)

const rutas=Router()

//listado de rutas para

rutas.get('/avanzada/v1/jugadores', function (req, res) {
    res.send('Estoy procesando un GET () buscar')
  })
  
rutas.post('/avanzada/v1/jugadores', function (req, res) {
      res.send('Estoy procesando un POST () insertar')
  })
  
rutas.put('/avanzada/v1/jugadores', function (req, res) {
      res.send('Estoy procesando un PUT () editando')
  })
  
rutas.delete('/avanzada/v1/jugadores', function (req, res) {
      res.send('Estoy procesando un DELETE () eliminar')
  })

  //exportar las rutas

  module.exports=rutas