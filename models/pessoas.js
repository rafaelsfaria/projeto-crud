const findAll = (connection) => {
  return new Promise((resolve, reject) => {
    connection.query('select * from pessoas', (err, results) => {
      if (err) {
        reject(err)
      } else {
        resolve(results)
      }
    })
  })
}

const deleteOne = (connection, id) => {
  return new Promise((resolve, reject) => {
    connection.query(`delete from pessoas where id = ${id} limit 1`, (err, results) => {
      if (err) {
        reject(err)
      } else {
        resolve(results)
      }
    })
  })
}

const create = (connection, data) => {
  const { nome, nascimento, cargo } = data
  return new Promise((resolve, reject) => {
    connection.query(`insert into pessoas (nome, nascimento, cargo) values ('${nome}', '${nascimento}', '${cargo}')`, (err, results) => {
      if (err) {
        reject(err)
      } else {
        resolve(results)
      }
    })
  })
}

const findById = (connection, id) => {
  return new Promise((resolve, reject) => {
    connection.query(`select * from pessoas where id=${id} limit 1`, (err, results) => {
      if (err) {
        reject(err)
      } else {
        if (results.length > 0) {
          resolve(results[0])
        } else {
          resolve({})
        }
      }
    })
  })
}

const update = (connection, id, data) => {
  const { nome, nascimento, cargo } = data
  return new Promise((resolve, reject) => {
    connection.query(`update pessoas set nome='${nome}', nascimento='${nascimento}', cargo='${cargo}' where id=${id}`, (err, results) => {
      if (err) {
        reject(err)
      } else {
        if (results.length > 0) {
          resolve(results[0])
        } else {
          resolve({})
        }
      }
    })
  })
}


module.exports = {
  findAll,
  deleteOne,
  create,
  findById,
  update
}