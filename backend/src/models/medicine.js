import mongoose from 'mongoose';

const medicationSchema = new mongoose.Schema({
    name: String,
    directions: String,
    refills: Number,
    daySupply: Number
});

const Medication = mongoose.model('Medication', medicationSchema);

export default Medication;