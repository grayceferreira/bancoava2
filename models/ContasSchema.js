const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContasSchema = new Schema({

_id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
tipo: { type: Number, required: true },
agencia: { type: Number, required: true },
conta: { type: String, required: true, unique: true },
saldo: { type: Number, require: true },
usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'usuarios' }
})

const contasModel = mongoose.model('contas', ContasSchema);

module.exports = contasModel;
