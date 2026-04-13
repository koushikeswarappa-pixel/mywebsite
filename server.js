const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/contact", (req, res) => {
  console.log(req.body);
  res.send({ success: true });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});