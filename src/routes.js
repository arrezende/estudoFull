/*
*   Rota / Recurso
*/

/**
 *  Métodos HTTP
 * 
 *  GET - Usados quando se quer buscar/listar alGuma informaçao do back-end
 *  POST - Usado para criar alguma informaçao no back-end
 *  PUT - Usado para alterar alguma informaçao no back-end
 *  DELETE - Usado para deletar alguma informaçao no back-end
 *  
 */

 /***
  * Tipos de Parametros:
  * 
  * Query: Parametros nomeados enviados na Rota apos o "?" (filtros, paginacao)
  * Route Params: Parametros utilizados para identificar recursos
  * Request Body: Corpo da requisiçao, utilizado para criar ou alterar recursos
  * 
  */


const express = require('express')

const OngsController = require('./controllers/OngsController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.get('/ongs', OngsController.index )
routes.post('/ongs', OngsController.create)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profile', ProfileController.index)

routes.post('/session', SessionController.create)

module.exports = routes 