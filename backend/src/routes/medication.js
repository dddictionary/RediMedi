import express from "express";

const router = express.Router();

router.get("/medication", (req, res) => {
    res.send("Hello from the backend.");
    });


export default router;