
const Funcionario = require('../models/Funcionarios')

module.exports = {




    async index(req, res){

        const funcionarios = await Funcionario.find();

        return res.json(funcionarios)
    },

    async store(req, res){

        const {nome, cpf} = req.body

        const funcionarios = await Funcionario.create({
            nome,
            cpf
        })

        return res.json(funcionarios)

    },


    async show(req, res){

        const {id} = req.params
        const funcionario = await Funcionario.findById(id) 

        return res.json(funcionario)


    },

    async update(req, res){

        const {id} = req.params

        const dados = {
                 nome : req.body.nome,
                cpf: req.body.cpf
        }


      const funcionario = await Funcionario.findByIdAndUpdate(id, dados, {new: true} )

      return res.json(funcionario)


    },

    async delete(req, res){

            const {id} = req.params

            const funcionario = await Funcionario.findByIdAndRemove(id)

        return res.json({
            message: `Funcionario ${funcionario.nome} deletado`
        })

    }


}