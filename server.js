const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

// ✅ Serve frontend files
app.use(express.static(__dirname));

// ✅ Default route → open index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// API
app.get("/services", (req, res) => {
    res.json([
        { name: "Web Design" },
        { name: "Interior Design" },
        { name: "Digital Marketing" }
    ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running on " + PORT);
});