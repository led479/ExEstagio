var mongoose = require('mongoose');
// Setup schema
var notaSchema = mongoose.Schema({
  valor: {
    type: Number,
    required: true
  },
  avaliacao: {
    type: mongoose.Schema.ObjectId,
    ref: 'avaliacao'
  },
  aluno: {
    type: mongoose.Schema.ObjectId,
    ref: 'aluno'
  }
});

// Exporta o modelo do nota
var Nota = module.exports = mongoose.model('nota', notaSchema);
module.exports.get = function (callback, limit) {
    Nota.find(callback).limit(limit);
}