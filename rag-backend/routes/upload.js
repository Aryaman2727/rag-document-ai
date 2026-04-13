const express = require("express");
const multer = require("multer");

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("file"), (req, res) => {
  console.log("UPLOAD HIT");
  res.send("File uploaded successfully");
});

module.exports = router;