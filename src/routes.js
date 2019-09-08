const {Router} = require('express');

const exameController = require('./controllers/exameController');
const medicoController = require('./controllers/medicoController');
const funcionarioController = require('./controllers/funcionarioController');


const routes = new Router();


routes.get('/', exameController.index)

routes.post('/exame', exameController.store)
routes.put('/exame/:id', exameController.update)


routes.get('/medico',medicoController.index)
routes.post('/medico',medicoController.store)


routes.post('/funcionario', funcionarioController.store)
routes.delete('/funcionario/:id', funcionarioController.delete)


module.exports = routes