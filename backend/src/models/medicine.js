import mongoose from 'mongoose';
import express from 'express';

// async function main() {
//     await mongoose.connect('mongodb://localhost:27017/redimedi');
// }

// main().catch(err => console.error(err));

// const medicineSchema = new mongoose.Schema({
//     name: String
// });

// const Medicine = mongoose.model('Medicine', medicineSchema);

// const naproxen = new Medicine({ name: 'Naproxen' });
// console.log(naproxen.name);

//const mongoose = require('mongoose');

// second try
// mongoose.connect('mongodb://localhost:27017/redimedi', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() =>{
//     console.log('Connected to MongoDB');
// }).catch(err => console.error('Error connecting to MongoDB: ',err));

//const express = require('express');
//const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5173;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/redimedi', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
