
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const usuario = require('./src/routes/usuario')
const conta = require('./src/routes/conta')
const PORT = 3000

app.use(cors())
app.use(bodyParser.json())
app.use('/usuario', usuario)
app.use('/conta', conta)

app.get('/', (request, response) => {
  response.send('Você está na home :)')
})


app.listen(PORT)
console.info(`Rodando na porta ${PORT}`)
