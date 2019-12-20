const pessoas = require('../models/pessoas')

const index = async (connection, req, res) => {
  const results = await pessoas.findAll(connection)
  res.render('pessoas/index', { pessoas: results })
}

const deleteRoute = async (connection, req, res) => {
  await pessoas.deleteOne(connection, req.params.id)
  res.redirect('/pessoas')
}

const createRoute = (req, res) => {
  res.render('pessoas/create')
}

const createPessoa = async (connection, req, res) => {
  await pessoas.create(connection, req.body)
  res.redirect('/pessoas')
}

module.exports = {
  index,
  deleteRoute,
  createRoute,
  createPessoa
}