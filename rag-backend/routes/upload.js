const express = require("express");
const router = express.Router();
const multer = require("multer");

const { saveData } = require("../utils/ragPipeline");

const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("file"), async (req, res) => {
    try {
        console.log("UPLOAD HIT");

        const fs = require("fs");
        const pdfParse = require("pdf-parse");

        const dataBuffer = fs.readFileSync(req.file.path);

        const data = await pdfParse(dataBuffer);

        saveData(data.text);

        res.send("File processed successfully");

    } catch (err) {
        console.error(err);
        res.status(500).send("Error processing file");
    }
});

module.exports = router;