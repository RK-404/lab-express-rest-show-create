const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log");

logs.get("/", (req, res) => {
    res.json(logsArray);
});

// SHOW
logs.get("/:arrayIndex", (req, res) => {
    if (logsArray[req.params.arrayIndex]) {
        res.json(logsArray[req.params.arrayIndex]);
    }
    else {
        res.status(404).redirect('/404');
    }
});

// CREATE
logs.post("/", (req, res) => {
    logsArray.push(req.body);
    res.json(logsArray[logsArray.length - 1]);
});

// DELETE
logs.delete("/:arrayIndex", (req, res) => {
    if (logsArray[req.params.arrayIndex]) {
        const deletedLog = logsArray.splice(req.params.arrayIndex, 1);
        res.json(deletedLog);
    }
    else {
        res.status(404).redirect(" /404");
    }
});

module.exports = logs;
