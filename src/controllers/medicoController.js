
const Medico = require('../models/Medicos')

module.exports = {

    async index(req, res){

            const medicos =  await Medico.find()

            return res.json(medicos)
    },

    async store(req, res){
        const {nome, crm} = req.body

        const medicos = await Medico.create({
            nome,
            crm
        })

        return res.json(medicos);

    },

    async show(req, res){
          
            const {id} = req.params

            const medicos = await Medico.findById(id)

            return res.json(medicos)
    },

    async update(req, res){
        const {id} = req.params

        const dados = {
            nome: req.body.nome,
            crm: req.body.crm
        }

        const medicos = await Medico.findByIdAndUpdate(id, dados, {new: true})

        return res.json(medicos)

        },

        async delete(req, res){
            const {id} = req.params

            const medicos = await Medico.findByIdAndRemove(id)

            return res.json(medicos)

        }
   

}