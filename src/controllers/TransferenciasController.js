const { connect } = require('../models/Repository')
const transferenciasModel = require('../models/TransferenciasSchema')
const contasModel = require('../models/ContasSchema')


connect()

const newTransferExterna = (request, response, next) => {
    const {
        idBanco, tipoConta, agencia, conta, documento, tipoTransferencia, valor,
        data, finalidade, historico
      } = request.body;

      novaTransferencia = new transferenciasModel({
        idBanco, tipoConta, agencia, conta, documento, tipoTransferencia, valor,
        data, finalidade, historico, contaOrigem: request.params.contaId,
      });


      novaTransferencia.save()
      .then(() => {
        contasModel.findOneAndUpdate({ _id: request.params.contaId }, { $push: { transferencia: newTransferExterna._id } })
          .then(() => {
            response.status(200).json(novaTransferencia);
          })
          .catch((err) => {
            throw new Error(err);
          });
  
      })
      .catch(err => next(err));
    }
  

    const newTransferInterna = (request, response, next) => {
        const {
            tipoTransferencia, valor,
            data, finalidade, historico,
            contaAva, contaOrigem, nome
          } = request.body;
    
          novaTransferencia = new transferenciasModel({
            tipoTransferencia, valor,
            data, finalidade, historico, contaAva,
            contaOrigem, nome
          });
          _id = contaOrigem;
    
          const trancacao = novaTransferencia.save()
              .then(() => {

                 contasModel.findById(contaOrigem, (error, conta) => {
    
                  if (conta) {
                    // return response.status(200).send(conta)
                    saldoOrigem = valor;
                    contasModel.findOneAndUpdate({ _id: contaOrigem }, { $set: { saldo:  conta.saldo - valor } })
                    .then(() => {
                      return response.status(200).json('Transferência realizada!');
                    })
                    .catch((err) => {
                      throw new Error(err);
                    });
                  }
      
  
              })

              })
              .catch((err) => {
                throw new Error(err);
      
          })
          .catch(err => next(err));
      }

    const getById = (request, response) => {
      const id = request.params.id
      
      return transferenciasModel.findById(id, (error, transferencia) => {
          if (error){
              return response.status(500).send(error)
          }

          if (transferencia) {
              return response.status(200).send(transferencia)
          }

          return response.status(400).send('Transação não encontrada.')
      })
    } 
        
      const getTransferenciasConta = (request, response) => {
        var contaOrigem = request.body.contaOrigem;

        return transferenciasModel.find({ contaOrigem: contaOrigem }, (error, transferencia) => {
          if (error){
            return response.status(500).send(error)
        }
  
        if (transferencia) {
            return response.status(200).send(transferencia)
        }
  
        return response.status(400).send('Não há transferências realizadas por essa conta.')
    })
    
  }
        
    module.exports = {
        newTransferExterna,
        newTransferInterna,
        getTransferenciasConta,
        getById
    }
