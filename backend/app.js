import express from 'express';
import authRoutes from './src/authRoutes.js'
import routes from "./src/routes"
const app = express();
const port = 3000;

app.use("/", authRoutes);
app.use("/", routes);
// Define routes and middleware here

app.get("/", (req, res) => {
    res.send("Hello from the backend.")
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

