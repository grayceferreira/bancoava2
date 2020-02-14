const seeder = require('mongoose-seed');

const MONGO_URL = "mongodb+srv://admin:Cepset1@@cluster0-vo2a0.mongodb.net/test?retryWrites=true&w=majority";

seeder.connect(MONGO_URL, function () {
    seeder.loadModels([
        ".src/controllers/UsuariosControllers"
])
    seeder.clearModels(['usuariosModel']);
    seeder.populateModels(data, function (err, seedUsuarios) {
        if (err) {
            return console.log("Erro ao importar seed de usuários!", err)
        }
        if (seedUsuarios) {
            return console.log("Seed de usuários importada com sucesso!", seedUsuarios)
        }
        seeder.disconnect()
    })

});

const data = [
{
    'model': 'usuarios',
    'documents': [
        {
        _id: "5e46edbbbc230500176a4f29",
        nome: "Diogo Oliveira",
        email: "diogo@gmail.com",
        foto: "https://cdn2.iconfinder.com/data/icons/emoji-and-emoticons/64/Emoji-103-512.png",
        cpf: "460.058.528-33",
        senha: "123",
        telefone1: "(11) 97070-2200",
        endereco: "Rua Alma Lavada",
        numero: 130,
        bairro: "Vila Silvia",
        cidade: "São Paulo",
        estado: "SP"
        },
        {
        _id: "5e46ef06bc230500176a4f2b",
        nome: "Clara Silva Alameda",
        email: "boomoclara@gmail.com",
        foto: "https://cdn2.iconfinder.com/data/icons/emoji-and-emoticons/64/Emoji-103-512.png",
        cpf: "340.631.975-06",
        senha: "123",
        telefone1: "(11) 94545-2260",
        endereco: "Rua Mar das Rosas",
        numero: 130,
        bairro: "Portugusa",
        cidade: "São Paulo",
        estado: "SP"
        }
    ]
}
];

seeder.connect(MONGO_URL, function () {
    seeder.loadModels([
        ".src/controllers/ContasControllers"
])
    seeder.clearModels(['contasModel']);
    seeder.populateModels(data, function (err, seedContas) {
        if (err) {
            return console.log("Erro ao importar seed de contas!", err)
        }
        if (seedContas) {
            return console.log("Seed de contas importada com sucesso!", seedContas)
        }
        seeder.disconnect()
    })

});

const data = [
    {
        'model': 'contas',
        'documents': [
            {
                "_id": "5e46f11abc230500176a4f2c",
                "tipo": 1,
                "agencia": 777,
                "conta": "5678",
                "saldo": 6000,
                "usuario": "5e46edbbbc230500176a4f29",
            },
            {
                "_id": "5e46f15cbc230500176a4f2d",
                "tipo": 1,
                "agencia": 888,
                "conta": "7896",
                "saldo": 3000,
                "usuario": "5e46ef06bc230500176a4f2b",
            }
        ]
    }
];

seeder.connect(MONGO_URL, function () {
    seeder.loadModels([
        ".src/controllers/TransferenciasControllers"
])
    seeder.clearModels(['transferenciasModel']);
    seeder.populateModels(data, function (err, seedTransferencias) {
        if (err) {
            return console.log("Erro ao importar seed de transferencias!", err)
        }
        if (seedTransferencias) {
            return console.log("Seed de transferências importada com sucesso!", seedTransferencias)
        }
        seeder.disconnect()
    })

});

const data = [
    {
        'model': 'transferencias',
        'documents': [
            {
            "_id": "5e46f62278a1525ec4b74204",
            "tipoTransferencia": 2,
            "valor":100,
            "data": "2020-02-14T00:00:00.000+00:00",
            "finalidade": 1,
            "historico": "Transferência",
            "contaOrigem": "5e46f11abc230500176a4f2c",
            "nome": "Alberto"
            },
            {
            "_id": "5e46f62278a1525ec4b74205",
            "tipoTransferencia": 2,
            "valor":340,
            "data": "2020-02-14T00:00:00.000+00:00",
            "finalidade": 1,
            "historico": "Transferência",
            "contaOrigem": "5e46f11abc230500176a4f2c",
            "nome": "Hanna"
            }
        ]
    }
];

