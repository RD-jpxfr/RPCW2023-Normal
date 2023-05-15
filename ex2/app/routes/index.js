var express = require('express');
var router = express.Router();
var Contract = require('../controllers/contract')

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Contract.list()
    .then(contracts => {
      res.render('index', { clist: contracts, d: data });
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção da lista de contratos"})
    })
});


router.get('/:id', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Contract.getContract(req.params.id)
    .then(contract => {
      res.render('contract', { c: contract, d: data });
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção do registo do contrato"})
    })
});

router.get('/inst/:nipc', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Contract.listByInst(req.params.nipc)
    .then(contracts => {
      res.render('inst', { nipc: nipc, clist: contracts, d: data });
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção da lista de contratos"})
    })
});

module.exports = router;
