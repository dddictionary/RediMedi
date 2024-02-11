// Import necessary modules and Medication model
import express from 'express';
import Medication from '../models/medicineSchema.js';

const router = express.Router();

// Use express.json() middleware to parse JSON in the request body
router.use(express.json());

// Route for fetching medication information
router.get('/refills', async (req, res) => {
    try {
        // Fetch medication data from the MongoDB collection
        const medications = await Medication.find({}, 'medicineName frequency dosage');
        
        // Send the filtered medication data back to the frontend
        res.status(200).json(medications);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;