const {Router} = require('express');

const exameController = require('./controllers/exameController');
const medicoController = require('./controllers/medicoController');
const funcionarioController = require('./controllers/funcionarioController');


const routes = new Router();


routes.get('/exame', exameController.index)
routes.get('/exame/:id', exameController.show)
routes.post('/exame', exameController.store)
routes.put('/exame/:id', exameController.update)
routes.delete('/exame/:id', exameController.delete)




routes.get('/medico',medicoController.index)
routes.get('/medico/:id', medicoController.show)
routes.post('/medico',medicoController.store)
routes.put('/medico/:id', medicoController.update)
routes.delete('/medico/:id', medicoController.delete)


routes.get('/funcionario', funcionarioController.index)
routes.get('/funcionario/:id', funcionarioController.show)
routes.post('/funcionario', funcionarioController.store)
routes.put('/funcionario/:id', funcionarioController.update)
routes.delete('/funcionario/:id', funcionarioController.delete)


module.exports = routes