
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const usuario = require('./src/routes/usuario')
const conta = require('./src/routes/conta')
const transferencia = require('./src/routes/transferencia')
const extrato = require('./src/routes/extrato')
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json())
app.use('/usuario', usuario)
app.use('/conta', conta)
app.use('/transferencia', transferencia)
app.use('/extrato', extrato)

app.get('/', (request, response) => {
  response.send('Você está na home :)')
})


app.listen(PORT)
console.info(`Rodando na porta ${PORT}`)
