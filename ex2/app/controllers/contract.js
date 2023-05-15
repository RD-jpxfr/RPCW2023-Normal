const Contract = require("../models/contract")

module.exports.list = () => {
    return Contract
        .find({})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

module.exports.getContract = id => {
    return Contract
        .findOne({_id:id})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

module.exports.listByInst = inst => {
    return Contract
        .find({NomeInstituicao:inst})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}
