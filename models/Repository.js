const mongoose = require('mongoose');
const MONGO_URL = 'mongodb://localhost:27017/bancoava2';

function connect () {
  mongoose.connect(MONGO_URL,
    { useNewUrlParser: true , useUnifiedTopology: true },
    function (error) {
      if(error) {
        console.error("Erro", error)
      } else {
        console.log("Sua conexão foi um sucesso!")
      }
    }
  );
}

module.exports = { connect }
