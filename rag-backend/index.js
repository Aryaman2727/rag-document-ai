console.log("CORRECT FILE RUNNING");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

// IMPORT ROUTES
const authRoutes = require("./routes/auth");
const uploadRoutes = require("./routes/upload");

// USE ROUTES
app.use("/auth", authRoutes);
app.use("/file", uploadRoutes);

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Server running 🚀");
});

// DB
mongoose.connect("mongodb+srv://TEST:Test123@cluster0.bghkdkn.mongodb.net/?appName=Cluster0")
.then(() => console.log("DB Connected"))
.catch(err => console.log("DB Error:", err));

// START SERVER (ALWAYS LAST)
app.get("/test", (req, res) => {
  res.send("TEST ROUTE WORKING");
});
app.get("/test", (req, res) => {
  res.send("WORKING");
});
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
