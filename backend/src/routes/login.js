import express from "express";
import PhoneNumber from "../models/phoneNumberSchema.js";

const router = express.Router();

// Use express.json() middleware to parse JSON in the request body
router.use(express.json());

router.post('/login', async (req, res) => {
    try {
        console.log(req.body);
        const { phoneNumber } = req.body;
        // Check if the user already exists in the database
        const existingNumber = await PhoneNumber.findOne({ phoneNumber });
        if (!existingNumber) {
            return res.status(404).json({ message: 'Phone number not found. Please register.' });
        }
        res.status(201).json({ message: 'Logged in successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;
