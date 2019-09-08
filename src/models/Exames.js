const mongoose = require('mongoose');

const ExameSchema = new mongoose.Schema({
    descricao: String 
},{
    timestamps: true
})

module.exports = mongoose.model('Exames', ExameSchema)