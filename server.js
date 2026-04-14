const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "public/services.html"));
});

app.get("/projects", (req, res) => {
  res.sendFile(path.join(__dirname, "public/projects.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public/contact.html"));
});

app.post("/contact", (req, res) => {
  console.log(req.body);
  res.json({ message: "Message sent!" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});