
const Exame = require('../models/Exames')

module.exports = {

    async index(req, res){

        return res.send('Index')
    },
    async store(req, res){
        const {descricao} = req.body

        const exames = await Exame.create({
            descricao
        })

        return res.json(exames);


    },
    async update(req, res){

       return res.json({
        message: "Altera um exame" 
       })
    }

}