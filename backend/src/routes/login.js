import express from "express";
import User from "../models/userSchema.js";

const router = express.Router();

// Use express.json() middleware to parse JSON in the request body
router.use(express.json());

router.post('/login', async (req, res) => {
    try {
        console.log(req.body);
        const { phoneNumber, password} = req.body;
        // look up the phone number if it exists in the database and compare the password
        const number = await User.findOne ({ phoneNumber });
        if (!number) {
            return res.status(404).json({ message: 'User not found' });
        }

        const user = new User ({
            phoneNumber,
            password,
        });
        await user.save();
        res.status(201).json({ message: 'User Saved Successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;
