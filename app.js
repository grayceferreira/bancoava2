const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const usuario = require('./src/routes/usuario');
const PORT = 3000

app.use(cors())
app.use(bodyParser.json())
app.use('/usuario', usuario)

app.get('/', (request, response) => {
  response.send('Você está na home :)')
})


app.listen(PORT)
console.info(`Rodando na porta ${PORT}`)
