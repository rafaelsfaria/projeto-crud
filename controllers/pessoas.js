const pessoas = require('../models/pessoas')
const formatDate = require('../lib/formatDate')

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

const updateRoute = async (connection, req, res) => {
  const pessoa = await pessoas.findById(connection, req.params.id)
  const { nascimento } = pessoa
  
  const formatedDate = formatDate(nascimento)
  res.render('pessoas/update', { pessoa, formatedDate })
}

const updatePessoa = async (connection, req, res) => {
  await pessoas.update(connection, req.params.id, req.body)
  res.redirect('/pessoas')
}

module.exports = {
  index,
  deleteRoute,
  createRoute,
  createPessoa,
  updateRoute,
  updatePessoa
}