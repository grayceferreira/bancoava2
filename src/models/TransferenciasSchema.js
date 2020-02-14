const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const contasModel = require('../models/ContasSchema')

const TransferenciasSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    idBanco: {type: Number, required: false },
    tipoConta: { type: String, required: false },
    nome: { type: String, required: false },
    agencia: { type: String, required: false },
    conta: { type: String, required: false },
    contaAva: { type: mongoose.Schema.Types.ObjectId, ref: 'contas' },
    documento: { type: String, required: false },
    tipoTransferencia: { type: Number, required: true},
    valor: { type: Number, required: true },
    data: { type: Date, required: true },
    finalidade: { type: Number, required: true},
    historico: { type: String, required: true },
    contaOrigem: {type: mongoose.Schema.Types.ObjectId, ref: 'contas', require: true}
})

const transferenciaModel = mongoose.model('transferencia',TransferenciasSchema);

module.exports = transferenciaModel;