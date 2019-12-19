const express = require('express')
const path = require('path')
const mysql = require('mysql')

const app = express()
const port = process.env.PORT || 3000

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'cadastro'
})

connection.connect(() => console.log('connected'))

app.use(express.static('public'))

// view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => console.log('CRUD listening on ' + port))