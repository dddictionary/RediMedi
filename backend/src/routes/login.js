import express from "express";
import User from "../models/userSchema.js";

const router = express.Router();

// Use express.json() middleware to parse JSON in the request body
router.use(express.json());

// Import necessary modules and User model

router.post('/login', async (req, res) => {
    try {
        const { phoneNumber, password } = req.body;

        // Look up the phone number in the database
        const user = await User.findOne({ phoneNumber });

        if (!user) {
            return res.status(404).json({ message: 'User not found. Please register.' });
        }

        // Compare the provided password with the stored hashed password
        const isPasswordValid = bcrypt.compareSync(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Incorrect password' });
        }

        // If the password is correct, you can proceed with the login logic
        // For example, you can create a JWT token and send it as a response

        res.status(200).json({ message: 'Login successful', user: { /* additional user data */ } });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


export default router;
