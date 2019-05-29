let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Bem vindo a API do Aux Professores!',
    });
});

// aluno routes
var alunoController = require('./controllers/alunoController');
router.route('/alunos')
    .get(alunoController.index)
    .post(alunoController.new);
router.route('/alunos/:aluno_id')
    .get(alunoController.view)
    .patch(alunoController.update)
    .put(alunoController.update)
    .delete(alunoController.delete);

// professor routes
var professorController = require('./controllers/professorController');
router.route('/professores')
    .get(professorController.index)
    .post(professorController.new);
router.route('/professores/:professor_id')
    .get(professorController.view)
    .patch(professorController.update)
    .put(professorController.update)
    .delete(professorController.delete);

// aviso routes
var avisoController = require('./controllers/avisoController');
router.route('/avisos')
    // .get(avisoController.index)
    .post(avisoController.new);
router.route('/avisos/:aviso_id')
    .get(avisoController.view);
    // .patch(avisoController.update)
    // .put(avisoController.update)
    // .delete(avisoController.delete);

// disciplina routes
var disciplinaController = require('./controllers/disciplinaController');
router.route('/disciplinas')
    .get(disciplinaController.index)
    .post(disciplinaController.new);
router.route('/disciplinas/:disciplina_id')
    .get(disciplinaController.view)
    .patch(disciplinaController.update)
    .put(disciplinaController.update)
    .delete(disciplinaController.delete);

// nota routes
var notaController = require('./controllers/notaController');
router.route('/notas')
    // .get(notaController.index)
    .post(notaController.new);
router.route('/notas/:nota_id')
    .get(notaController.view);
    // .patch(notaController.update)
    // .put(notaController.update)
    // .delete(notaController.delete);

// avaliacao routes
var avaliacaoController = require('./controllers/avaliacaoController');
router.route('/avaliacoes')
    // .get(avaliacaoController.index)
    .post(avaliacaoController.new);
router.route('/avaliacoes/:avaliacao_id')
    .get(avaliacaoController.view);
    // .patch(avaliacaoController.update)
    // .put(avaliacaoController.update)
    // .delete(avaliacaoController.delete);


// Export API routes
module.exports = router;