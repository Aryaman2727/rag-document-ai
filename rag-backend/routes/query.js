const express = require("express");
const router = express.Router();

const { getAnswer } = require("../utils/ragPipeline");

router.post("/ask", (req, res) => {
    const { query } = req.body;

    const answer = getAnswer(query);

    res.json({ answer });
});

module.exports = router;