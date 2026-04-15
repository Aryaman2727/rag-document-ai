require("dotenv").config();
console.log("ENV CHECK:", process.env.MONGO_URI);
console.log("CORRECT FILE RUNNING");
const express = require("express");
const mongoose = require("mongoose");
const queryRoutes = require('./routes/query');
const app = express();

app.use(express.json());

// IMPORT ROUTES
const authRoutes = require("./routes/auth");
const uploadRoutes = require("./routes/upload");

// USE ROUTES
app.use("/auth", authRoutes);
app.use("/file", uploadRoutes);
app.use('/api', uploadRoutes);
app.use('/api', queryRoutes);

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Server running 🚀");
});

// DB
mongoose.connect(process.env.MONGO_URI)
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

app.get("/", (req, res) => {
  res.json({
    status: "Server is running 🚀",
    endpoints: {
      upload: "/file/upload",
      ask: "/api/ask"
    }
  });
});
