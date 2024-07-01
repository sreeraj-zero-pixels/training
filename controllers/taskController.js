const Task = require("../models/Task");

const createTask = async (req, res) => {
    try {
        await Task.create(req.body);
        return res.status(200).send("created successfully");
    } catch (e) {
        return res.status(400).send(e.message);
    }
}

const readTask = async (req, res) => {
    try {
        const result = await Task.find();
        return res.status(200).json(result);
    } catch (e) {
        return res.status(500).send(e.message);
    }
}

module.exports = { createTask, readTask };
