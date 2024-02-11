import mongoose from 'mongoose';

const phoneNumberSchema = new mongoose.Schema({
    phoneNumber: String
});

export default mongoose.model('PhoneNumber', phoneNumberSchema);