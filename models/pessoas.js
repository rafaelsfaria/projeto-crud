const findAll = async (connection) => (await connection('pessoas').select('*'))
const deleteOne = async (connection, id) => (await connection('pessoas').where({ id }).del())
const create = async (connection, data) => (await connection('pessoas').insert({ ...data }))
const update = async (connection, id, data) => (await connection('pessoas').where({ id }).update({ ...data }))
const findById = async (connection, id) => {
  const results = await connection('pessoas').select('*').where({ id })
  if (results.length> 0) {
    return results[0]
  } else {
    return {}
  }
}

module.exports = {
  findAll,
  deleteOne,
  create,
  findById,
  update
}