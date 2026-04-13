const express = require("express");
const app = express();

// middleware
app.use(express.json());
app.use(express.static("public"));

// simple API (no database)
app.post("/contact", (req, res) => {
  console.log("Form Data:", req.body);
  res.send({ success: true });
});

// IMPORTANT: works for both local + Render
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});