const { connect } = require('../models/Repository');
const usuariosModel = require('../models/UsuariosSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
connect()

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400
  });
} 

const getAll = (request, response) => {
  
  usuariosModel.find((error, usuario) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(200).send(usuario)
  })
}

const getById = (request, response) => {
  const id = request.userId;

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

const add = async (request, response) => {
  if (!request.body.senha) {
    return response.status(400).send('Informe sua senha!')
  }

  try {
    const cpf = request.body.cpf

    if(await usuariosModel.findOne({ cpf })){
      return response.status(400).send('Usuário já existe!')
    }

    const senhaCriptografada = bcrypt.hashSync(request.body.senha)
    request.body.senha = senhaCriptografada
    const novoUsuario = new usuariosModel(request.body)
  
    await novoUsuario.save((error) => {
      if (error) {
        return response.status(500).send(error)
      }
      
      novoUsuario.senha = undefined;

      return response.status(201)
      .send({
        novoUsuario, 
        token: generateToken({ id: novoUsuario.id })
      });
    })

  } catch (error) {
    return response.status(400).send('Erro ao tentar cadastrar!')

  }


}

const login = async (request, response) => {
  const cpf = request.body.cpf;
  const senha = request.body.senha;
  const usuario = await usuariosModel.findOne({ cpf }).select('+senha');

  if(!usuario)
    return response.status(400).send({ error: 'Usuário não encontrado' });

  const senhaValida = bcrypt.compareSync(senha, usuario.senha)
  if (!senhaValida) {
    return response.status(401).send('Usuário ou senha inválidos!');
  }

  usuario.senha = undefined;

  return response.status(200)
    .send({
      usuario, 
      token: generateToken({ id: usuario.id })
    });


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
