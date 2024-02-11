import express from 'express';
import cors from "cors";
import mongoose from 'mongoose';
import medication from "./src/routes/medication.js"
import login from "./src/routes/login.js"
import register from "./src/routes/register.js"
import refill from "./src/routes/refills.js"
const app = express();
const port = 3000;

app.use(cors());
app.use("/", medication);
app.use("/", login);
app.use("/", register);
app.use("/", refill);


// Define routes and middleware here

app.get("/", (req, res) => {
    res.send("Hello from the backend api.")
})


mongoose.connect('mongodb+srv://imtiazc56:redimedi@cluster0.ynhbtul.mongodb.net/redimedi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
})


// mongoose.connect('mongodb+srv://imtiazc56:redimedi@cluster0.ynhbtul.mongodb.net/redimedi', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch(err => {
//   console.error('Error connecting to MongoDB:', err);
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



