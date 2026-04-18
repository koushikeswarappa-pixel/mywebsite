const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static frontend files
app.use(express.static(path.join(__dirname, "public")));

// Home Route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Contact Form API
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("===== New Contact Inquiry =====");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);
  console.log("===============================");

  res.json({
    success: true,
    message: "Thank you! Your message has been received successfully."
  });
});

// 404 Route
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

// Start Server
app.listen(PORT, () => {
  console.log("=================================");
  console.log("Creative Touch Fresh Website");
  console.log(`Server Running: http://localhost:${PORT}`);
  console.log("=================================");
});