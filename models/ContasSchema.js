const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ContasSchema = new Schema({

tipo: { type: Number, required: true },
agencia: { type: String, required: true },
conta: { type: String, required: true }
})

const contaModel = mongoose.model('conta',ContasSchema);

module.exports = contaModel;
