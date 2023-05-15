var express = require('express');
var router = express.Router();
var Contract = require('../controllers/contract')

router.get('/contracts', function(req, res) {
  // Listar por ano
  if (req.query.year){
    console.log(req.query.year)
    Contract.listByYear(req.query.year)
      .then(dados => res.status(200).jsonp(dados))
      .catch(erro => res.status(520).jsonp({erro: erro, mensagem: "Erro na listagem dos Contratos por ano."}))
  }
  // Listar por instituicao
  else if (req.query.inst){
    Contract.listByInst(req.query.inst)
      .then(dados => res.status(200).jsonp(dados))
      .catch(erro => res.status(520).jsonp({erro: erro, mensagem: "Erro na listagem dos Contratos por instituição."}))
  }
  // Listar todos
  else {
    Contract.list()
      .then(dados => res.status(200).jsonp(dados))
      .catch(erro => res.status(520).jsonp({erro: erro, mensagem: "Erro na listagem dos Contratos."}))
  }
});

router.get('/contracts/courses', function(req, res) {
  Contract.getCourses()
    .then(dados => res.status(200).jsonp(dados))
    .catch(erro => res.status(521).jsonp({erro: erro, mensagem: "Erro na recuperação dum contrato."}))
});

router.get('/contracts/institutions', function(req, res) {
  Contract.getInstitutions()
    .then(dados => res.status(200).jsonp(dados))
    .catch(erro => res.status(521).jsonp({erro: erro, mensagem: "Erro na recuperação dum contrato."}))
});

router.get('/contracts/:id', function(req, res) {
  Contract.getContract(req.params.id)
    .then(dados => res.status(200).jsonp(dados))
    .catch(erro => res.status(521).jsonp({erro: erro, mensagem: "Erro na recuperação dum contrato."}))
});

router.post('/contracts', (req, res) => {
  Contract.addContract(req.body)
    .then(dados => res.status(201).jsonp(dados))
    .catch(erro => res.status(522).jsonp({erro: erro, mensagem: "Erro na inserção dum EMD."}))
})

router.delete('/contracts/:id', function(req, res) {
  Contract.deleteContract(req.params.id)
    .then(dados => res.status(200).jsonp(dados))
    .catch(erro => res.status(523).jsonp({erro: erro, mensagem: "Erro na remoção dum EMD."}))
});


module.exports = router;
