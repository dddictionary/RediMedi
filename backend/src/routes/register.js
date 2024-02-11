import express from "express";
import PhoneNumber from "../models/phoneNumberSchema.js";

const router = express.Router();

// Use express.json() middleware to parse JSON in the request body
router.use(express.json());

router.post('/register', async (req, res) => {
    try {
        console.log("request: ", req.body);
        const { phoneNumber } = req.body;

        // Check if the user already exists in the database
        const existingNumber = await PhoneNumber.findOne({ phoneNumber });
        
        if (existingNumber) {
            return res.status(400).json({ message: 'User with this phone number already exists.' });
        }

        // Create a new user with the provided phone number and hashed password
        const newNumber = new PhoneNumber({
            phoneNumber,
        });

        // Save the user to the database
        await newNumber.save();
        // console.log("saved to db");
        res.status(201).json({ message: 'Registration successful' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;
