const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend running ✅");
});

// Contact API
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("New Message:");
  console.log(name, email, message);

  res.json({
    success: true,
    message: "Message sent successfully 🚀"
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});