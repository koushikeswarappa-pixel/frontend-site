const express = require("express");
const path = require("path");

const app = express();

// ✅ serve static files
app.use(express.static(__dirname));

// ✅ default route
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