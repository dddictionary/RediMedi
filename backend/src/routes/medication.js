import express from "express";
import Medication from "../models/medicine.js";

const router = express.Router();

// Use express.json() middleware to parse JSON in the request body
router.use(express.json());

router.post("/medication", async (req, res) => {
    try {
        console.log(req.body);
        const { name, directions, refills, daySupply } = req.body;
        const medication = new Medication({ name, directions, refills, daySupply });
        await medication.save();
        res.status(201).json({ message: 'Medication Saved Successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error'});
    }
});

export default router;
