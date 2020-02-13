const { connect } = require('../models/Repository')
const contasModel = require('../models/ContasSchema')
const usuariosModel = require('../models/UsuariosSchema')

connect()

  const newAccount = (request, response, next) => {
    const {
        tipo, agencia, conta, saldo,
      } = request.body;
      console.log(request.body)

      novaConta = new contasModel({
          tipo,
          agencia,
          conta,
          saldo, 
          usuario: request.params.usuarioId,
      });

      console.log(novaConta)

      novaConta.save()
      .then(() => {
        usuariosModel.findOneAndUpdate({ _id: request.params.usuarioId }, { $push: { conta: newAccount._id } })
          .then(() => {
            response.status(200).json('Conta criada!');
          })
          .catch((err) => {
            throw new Error(err);
          });
  
      })
      .catch(err => next(err));
    }

 
    const getAll = (request, response) => {
        contasModel.find((error, contas) => {
            if (error) {
                return response.status(500).send(error)
            }
            return response.status(200).send(contas)
        })
    }

    const getById = (request, response) => {
        const id = request.params.id
        
        return contasModel.findById(id, (error, conta) => {
            if (error){
                return response.status(500).send(error)
            }

            if (conta) {
                return response.status(200).send(conta)
            }

            return response.status(400).send('Conta não encontrada.')
        })
    } 

    module.exports = {
        newAccount,
        getAll,
        getById
    }
