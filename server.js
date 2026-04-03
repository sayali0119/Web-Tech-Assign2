const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

console.log("🔥 Server file is running...");

let donors = [];

// Home
app.get("/", (req, res) => {
    res.send("Server Working ✅");
});

// Add donor (POST)
app.post("/donors", (req, res) => {
    const { name, blood, city } = req.body;

    donors.push({ name, blood, city });

    res.json({ message: "Donor Added Successfully" });
});

// Get donors
app.get("/donors", (req, res) => {
    res.json(donors);
});

app.listen(3000, () => {
    console.log("🚀 Server running on http://localhost:3000");
});