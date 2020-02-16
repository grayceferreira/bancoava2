const mongoose = require('mongoose');
const MONGO_URL = 'mongodb+srv://admin:Cepset1@@cluster0-vo2a0.mongodb.net/test?retryWrites=true&w=majority';

function connect () {
  mongoose.connect(MONGO_URL,
    { useNewUrlParser: true , useUnifiedTopology: true, useFindAndModify: false },
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


