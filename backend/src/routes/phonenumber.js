import express from "express";
import PhoneNumber from "../models/phoneNumberSchema.js";
import twilio from 'twilio';

const router = express.Router();

// Use express.json() middleware to parse JSON in the request body
router.use(express.json());

// Twilio credentials
const accountSid = 'AC824f001a8cf88aae84aefdc509f52e37';
const authToken = '21a4c68c910bf2ac1b3be3277e1ec00d';
const twilioClient = twilio(accountSid, authToken);
const twilioPhoneNumber = '7183109583';

router.post('/phonenumber', async (req, res) => {
    try {
        console.log(req.body);
        const { phoneNumber } = req.body;
        const newPhoneNumber = new PhoneNumber({
            phoneNumber,
        });
        await newPhoneNumber.save();

        // Send SMS remainders
        const message = await twilioClient.messages.create({
            body: 'Your Refill is Due Soon. Please Schedule a Refill Appointment.',
            from: twilioPhoneNumber,
            to: phoneNumber,
        });

        console.log('SMS sent:', message.sid);
        
        res.status(201).json({ message: 'Phone Number Saved Successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;
