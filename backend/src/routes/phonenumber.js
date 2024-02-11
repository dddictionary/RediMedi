import express from "express";
import PhoneNumber from "../models/phoneNumberSchema.js";

const router = express.Router();

// Use express.json() middleware to parse JSON in the request body
router.use(express.json());

router.post('/phonenumber', async (req, res) => {
    try {
        console.log(req.body);
        const { phoneNumber } = req.body;
        const newPhoneNumber = new PhoneNumber({
            phoneNumber,
        });
        await newPhoneNumber.save();
        res.status(201).json({ message: 'Phone Number Saved Successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;
