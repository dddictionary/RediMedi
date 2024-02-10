import mongoose from 'mongoose';

const medicationSchema = new mongoose.Schema({
    name: String,
    directions: String,
    refills: Number,
    daySupply: Number
});

export default mongoose.model('Medication', medicationSchema);