const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

// Starting the app
const app = express();
app.use(express.json());
app.use(cors());

// db Config
const db = "mongodb://localhost:27017/nodeapi";
// Connecting to Mongodb
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

requireDir("./models");

// Routes
const product = require("./routes");
// Use Routes
app.use("/api", product);

const port = 5000;
// Starting Server
app.listen(port, () => console.log(`Server running on port ${port}`));
