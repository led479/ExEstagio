var mongoose = require('mongoose');
// Setup schema
var avisoSchema = mongoose.Schema({
  texto: {
    type: String,
    required: true
  }
});

// Exporta o modelo do aviso
var Aviso = module.exports = mongoose.model('aviso', avisoSchema);
module.exports.get = function (callback, limit) {
    Aviso.find(callback).limit(limit);
}