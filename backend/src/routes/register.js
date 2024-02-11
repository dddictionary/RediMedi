import express from "express";
import User from "../models/userSchema.js";

const router = express.Router();

// Use express.json() middleware to parse JSON in the request body
router.use(express.json());

router.post('/register', async (req, res) => {
    try {
        console.log(req.body);
        const { phoneNumber, hashedPassword } = req.body;

        // Check if the user already exists in the database
        const existingUser = await User.findOne({ phoneNumber });
        
        if (existingUser) {
            return res.status(400).json({ message: 'User with this phone number already exists.' });
        }

        // Create a new user with the provided phone number and hashed password
        const newUser = new User({
            phoneNumber,
            password: hashedPassword,
        });

        // Save the user to the database
        await newUser.save();

        res.status(201).json({ message: 'Registration successful' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;
