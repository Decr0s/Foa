
const Funcionario = require('../models/Funcionarios')

module.exports = {

    async store(req, res){

        const {nome, cpf} = req.body

        const funcionarios = await Funcionario.create({
            nome,
            cpf
        })

        return res.json(funcionarios)

    },
    async delete(req, res){

        return res.json({
            message: "Exclui um funcionário." 
        })

    }


}