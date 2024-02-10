import express from 'express';
import cors from "cors";
import authRoutes from './src/authRoutes.js'
import medication from "./src/routes/medication.js"
const app = express();
const port = 3000;

app.use(cors());
app.use("/", authRoutes);
app.use("/", medication);
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
//   });

// Define routes and middleware here

app.get("/", (req, res) => {
    res.send("Hello from the backend api.")
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

