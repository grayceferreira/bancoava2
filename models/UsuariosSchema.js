const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UsuariosSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
  nome: { type: String, required: true },
  email: { type: String, required: true },
  foto: { type: String, required: false },
  cpf: { type: String, require: true},
  senha: { type: String, required: true },
  agencia: { type: String, required: true },
  conta: { type: String, required: true },
  telefone1: { type: String, required: true},
  telefone2: {type: String, required: false},
  endereco: { type: String, required: true },
  bairro: { type: String, required: true },
  cidade: { type: String, required: true },
  estado: { type: String, required: true }
})

const usuariosModel = mongoose.model('usuarios',UsuariosSchema);

module.exports = usuariosModel;