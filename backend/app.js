import express from 'express';
import authRoutes from './src/authRoutes.js'
const app = express();
const port = 3000;

app.use("/", authRoutes);

// Define routes and middleware here

app.get("/", (req, res) => {
    res.send("Hello from the backend.")
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

