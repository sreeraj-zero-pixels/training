const express = require("express");
const app = express();
const client = require("./connection");
const taskController = require("./controllers/taskController");
const cors = require("cors");

client
    .connect("mongodb+srv://sreerajr:KtbCc5vTC3ivVs1e@cluster0.wlcyjnz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then((res) => {
        console.log("Connected to mongodb");
    })
    .catch((err) => {
        console.log("Failed to connect to mongodb");
        console.log(err);
    });
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send({ message: "successful" });
});

app.post("/", (req, res) => {
    const data = req.body;
    console.log(data);
    res.status(200).json({ data });
});

app.post("/task", taskController.createTask);
app.get("/task", taskController.readTask);

app.listen(process.env.PORT || 8000, () => {
    console.log("Server started on port 8000");
});


/*
Project topics
Vaazha db - Library management
Technocrats - Travel booking app
Daddy wilson - Food delivery
Harikrishnans(8) - E-commerce
Grace um pillerum(8) - Ride booking
Paandipada - Social media
Stack Surge - Car rental
Code crafters - Movie booking
*/
