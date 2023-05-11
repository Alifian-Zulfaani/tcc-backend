const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const data = {
    message: "Ini adalah tugas App Engine prak tcc",
    author: "kokoshiwo",
    date: new Date(),
  };

  res.json(data);
});

// Start server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running at http://localhost:${process.env.PORT || 3000}`);
});
