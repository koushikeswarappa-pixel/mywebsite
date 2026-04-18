const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/contact", (req, res) => {
  const { name, email, phone, message } = req.body;

  console.log("New Contact Message:");
  console.log({ name, email, phone, message });

  res.json({
    success: true,
    message: "Thank you! We will contact you soon."
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});