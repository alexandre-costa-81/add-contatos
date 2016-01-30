var mongoose = require('mongoose');

var ContatoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  telefone: { type: String, required: true },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Contato', ContatoSchema);