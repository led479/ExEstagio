let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Bem vindo a API do Aux Professores!',
    });
});

// Import aluno controller
var alunoController = require('./controllers/alunoController');

// aluno routes
router.route('/alunos')
    .get(alunoController.index)
    .post(alunoController.new);
router.route('/alunos/:aluno_id')
    .get(alunoController.view)
    .patch(alunoController.update)
    .put(alunoController.update)
    .delete(alunoController.delete);
// Export API routes
module.exports = router;