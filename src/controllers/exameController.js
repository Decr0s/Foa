
const Exame = require('../models/Exames')

module.exports = {

    async index(req, res){

            const exames = await Exame.find();

        return res.json(exames)
    },
    
    async store(req, res){
        const {descricao} = req.body

        const exames = await Exame.create({
            descricao
        })

        return res.json(exames);

    },
    async show(req, res){
        const {id} = req.params

        const exame = await Exame.findById(id)

        return res.json(exame)

    },
    async update(req, res){

        const {id} = req.params

        const dados = {
            descricao: req.body.descricao
        }

        const exame = await Exame.findByIdAndUpdate(id, dados,{new: true})

        return res.json(exame)
    },

    async delete(req, res){

        const {id} = req.params

        const exame = await Exame.findByIdAndRemove(id)

        return res.json(exame)

    }

}