const mongoose = require('mongoose');
const MONGO_URL = 'mongodb+srv://admin:admin@cluster0-3tdqy.mongodb.net/test?retryWrites=true&w=majority';

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


