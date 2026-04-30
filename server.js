const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// ✅ root route (FIX)
app.get("/", (req, res) => {
    res.send("Backend is running 🚀");
});

// example API
app.get("/services", (req, res) => {
    res.json([
        { name: "Web Design" },
        { name: "Interior Design" }
    ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running on " + PORT);
});