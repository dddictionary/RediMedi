import mongoose from 'mongoose';

const medicationSchema = new mongoose.Schema({
    medicineName: String,
    frequency: String,
    dosage: String,
    refills: String,
});

export default mongoose.model('Medication', medicationSchema);