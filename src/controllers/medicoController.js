
const Medico = require('../models/Medicos')

module.exports = {

    async index(req, res){

       
        return res.json({
            message: "Listagem de todos os médicos"
        })
    },

    async store(req, res){
        const {nome, crm} = req.body

        const medicos = await Medico.create({
            nome,
            crm
        })

        return res.json(medicos);


    },
   

}