var mongoose = require('mongoose');
// Setup schema
var avisoSchema = mongoose.Schema({
  texto: {
    type: String,
    required: true
  },
  professor: {
    type: mongoose.Schema.ObjectId,
    ref: 'professor'
  },
  alunos: [{
    type: mongoose.Schema.ObjectId,
    ref: 'aluno'
  }],

});

// Exporta o modelo do aviso
var Aviso = module.exports = mongoose.model('aviso', avisoSchema);
module.exports.get = function (callback, limit) {
    Aviso.find(callback).limit(limit);
}