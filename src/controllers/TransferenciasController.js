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
            data, finalidade, historico
          } = request.body;
    
          novaTransferencia = new transferenciasModel({
            tipoTransferencia, valor,
            data, finalidade, historico, contaAva: request.params.contaDestino,
            contaOrigem: request.params.contaId,
          });
    
          novaTransferencia.save()
          .then(() => {
            contasModel.findOneAndUpdate([ {_id: request.params.contaId } , {_id: request.params.contaDestino } ],
                 { $push: { transferencia: newTransferInterna._id } })
              .then(() => {
                response.status(200).json(novaTransferencia);
              })
              .catch((err) => {
                throw new Error(err);
              });
      
          })
          .catch(err => next(err));
        }

        const getById = (request, response) => {
          const id = request.id;
        
          return transferenciasModel.findById(id, (error, transferencia) => {
            if (error) {
              return response.status(500).send(error)
            }
        
            if (transferencia) {
              return response.status(200).send(transferencia)
            }
        
            return response.status(404).send('Transação não encontrada.')
          })
        }
        
        const getTransferenciasUsuario = (request, response) => {
          const usuario = request.params.usuario
          
          return transferenciasModel.find(usuario, (error, transferencia) => {
            if (error){
              return response.status(500).send(error)
          }
    
          if (conta) {
              return response.status(200).send(transferencia)
          }
    
          return response.status(400).send('Não há transferências realizadas por este usuário.')
      })
    }
        
    module.exports = {
        newTransferExterna,
        newTransferInterna,
        getTransferenciasUsuario,
        getById
    }
