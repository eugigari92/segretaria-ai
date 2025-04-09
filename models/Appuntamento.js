

const mongoose = require('mongoose');

const appuntamentoSchema = new mongoose.Schema({
    titolo: {
        type: String,
        required: true, 
    },
    dataInizio: {
        type: Date,
        required: true,
    },
    dataFine: {
        type: Date,
        required: true,
    },
    note: {
        type: String,
        default: "",
    } ,
    luogo: {
        type: String,
        default: "",
    }
});

module.exports = mongoose.model('Appuntamento', appuntamentoSchema);
