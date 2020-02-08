const { connect } = require('../models/Repository')
const usuariosModel = require('../models/UsuariosSchema')
const bcrypt = require('bcryptjs')

connect()

const getAll = (request, response) => {
  usuariosModel.find((error, usuario) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(200).send(usuario)
  })
}

const getById = (request, response) => {
  const id = request.params.id

  return usuariosModel.findById(id, (error, usuario) => {
    if (error) {
      return response.status(500).send(error)
    }

    if (usuario) {
      return response.status(200).send(usuario)
    }

    return response.status(404).send('Usuário não encontrado.')
  })
}

const add = (request, response) => {
  if (!request.body.senha) {
    return response.status(400).send('Informe sua senha!')
  }
  const senhaCriptografada = bcrypt.hashSync(request.body.senha)
  request.body.senha = senhaCriptografada
  const novoUsuario = new usuariosModel(request.body)

  novoUsuario.save((error) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(201).send(novoUsuario)
  })
}

const login = async (request, response) => {
  const cpf = request.body.cpf
  const senha = request.body.senha
  const usuario = await usuariosModel.findOne({ cpf })
  const senhaValida = bcrypt.compareSync(senha, usuario.senha)

  if (senhaValida) {
    return response.status(200).send('Usuário logado!')
  }

  return response.status(401).send('Usuário ou senha inválidos!')
}

const remove = (request, response) => {
  const id = request.params.id

  usuariosModel.findByIdAndDelete(id, (error, usuario) => {
    if (error) {
      return response.status(500).send(error)
    }

    if (usuario) {
      return response.status(200).send('Usuário deletado com sucesso!')
    }

    return response.status(404).send('Usuário não encontrado.')
  })
}

const update = (request, response) => {
  const id = request.params.id
  const usuarioUpdate = request.body
  const options = { new: true }

  usuariosModel.findByIdAndUpdate(
    id,
    usuarioUpdate,
    options,
    (error, usuario) => {
      if (error) {
        return response.status(500).send(error)
      }

      if (usuario) {
        return response.status(200).send(usuario)
      }

      return response.status(404).send('Usuário não encontrado.')
    }
  )
}

module.exports = {
  getAll,
  getById,
  add,
  login,
  remove,
  update 
}
