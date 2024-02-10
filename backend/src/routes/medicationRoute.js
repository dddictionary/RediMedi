const express = require('express');
const router = express.Router();
const Medication = require('../models/Medication');

router.post('/medication', async (req, res) => {
    try {
        const {name, directions, refills, daySupply } = req.body;
        const medication = new Medication({ name, directions, refills, daySupply });
        await medication.save();
        res.status(201).json({ message: 'Medication saved successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;