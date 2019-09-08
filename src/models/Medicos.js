const mongoose = require('mongoose')

const MedicoSchema = new mongoose.Schema({
    nome: String,
    crm: String

},{
    timestamps: true
})


module.exports = mongoose.model('Medicos', MedicoSchema)
