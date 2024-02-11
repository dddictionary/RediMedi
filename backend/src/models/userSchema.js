import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    phoneNumber: String,
    password: String,
});

export default mongoose.model('User', userSchema);