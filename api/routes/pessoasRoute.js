const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router
.get('/pessoas', PessoaController.pegaTodasAsPessoasAtivas)
.get('/pessoas/todos', PessoaController.pegaTodasAsPessoas)
.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
.post('/pessoas', PessoaController.criaPessoa)
.put('/pessoas', PessoaController.atualizaPessoa)
.delete('/pessoas', PessoaController.apagaPessoa)
.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagaMatricula)
.post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula)
.get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas)
.get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.pegaMatriculasPorTurma)
.get('/pessoas/matricula/lotada', PessoaController.pegaTurmasLotadas)

module.exports = router