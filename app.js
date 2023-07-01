// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
    res.send("welcome to the captain's log");
});

const logsController = require("./controllers/logsController.js");
app.use("/logs", logsController);

// 404 PAGE
app.get("*", (req, res) => {
    res.json({ error: "Page not found" });
});

// EXPORT
module.exports = app;
