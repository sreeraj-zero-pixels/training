const mongoose = require("mongoose");

const Task = new mongoose.Schema({
    taskId: {
        type: Number,
        unique: true,
        required: true,
    },
    title: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Task", Task);
