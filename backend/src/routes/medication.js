import express from "express";

const router = express.Router();

// Use express.json() middleware to parse JSON in the request body
router.use(express.json());

router.post("/medication", (req, res) => {
    // req.body will now contain the JSON data sent by the client
    console.log(req.body);
    res.json({ message: "We got your stuff" });
});

export default router;
