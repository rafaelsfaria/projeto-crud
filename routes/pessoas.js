const express = require('express')
const pessoasController = require('../controllers/pessoas')

const pessoasRouter = ({ connection }) => {
  const router = express.Router()
  router.get('/', pessoasController.index.bind(null, connection))
  router.get('/delete/:id', pessoasController.deleteRoute.bind(null, connection))
  router.get('/create', pessoasController.createRoute)
  router.post('/create', pessoasController.createPessoa.bind(null, connection))
  router.get('/update/:id', pessoasController.updateRoute.bind(null, connection))
  router.post('/update/:id', pessoasController.updatePessoa.bind(null, connection))
  return router
}

module.exports = pessoasRouter