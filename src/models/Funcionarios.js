const mongoose = require('mongoose')


const FuncionarioSchema = new mongoose.Schema({

    nome: String,
    cpf: String

},{
    timestamps: true
})

module.exports = mongoose.model('Funcionarios', FuncionarioSchema)