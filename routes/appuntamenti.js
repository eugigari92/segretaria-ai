const express = require('express');
const router = express.Router();
const Appuntamento = require('../models/Appuntamento');


router.get('/', async (req, res) => 
{
    try {
        const appuntamenti = await Appuntamento.find().sort({ dataInizio: 1 });    
        res.json(appuntamenti);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}   
);



router.post('/', async (req, res) =>
{
    try {
        const nuovoAppuntamento = new Appuntamento({
            titolo: req.body.titolo,
            dataInizio: new Date(req.body.dataInizio),
            dataFine: new Date(req.body.dataFine),
            note: req.body.note || "",
            luogo: req.body.luogo || ""
        } 
    );
    
    const salvato = await nuovoAppuntamento.save();
    res.status(201).json(salvato);
    }
    catch (err) {
        console.error(err);
        res.status(400).json({ message: err.message });
    }
});


router.delete('/:id', async (req, res) => 
{
    try {
        const result = await Appuntamento.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ message: 'Appuntamento non trovato' });
        }
        res.status(200).json({ message: "Appuntamento eliminato con successo" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});








module.exports = router;
