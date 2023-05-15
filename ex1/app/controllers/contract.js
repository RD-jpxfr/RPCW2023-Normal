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

module.exports.listByYear = year => {
    return Contract
        .find({AnoDiplona:year})
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

module.exports.getCourses = () => {
    return Contract
        .distinct('Curso')
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

module.exports.getInstitutions = () => {
    return Contract
        .distinct('NomeInstituicao')
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

module.exports.addContract = e => {
    return Contract
        .create(e)
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

module.exports.deleteContract = id => {
    return Contract
        .deleteOne({_id:id})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}