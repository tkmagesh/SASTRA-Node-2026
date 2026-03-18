const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("GET req made for '/' ");
});

app.post("/", (req, res) => {
  res.send("POST req made for '/' ");
});

app.put("/", (req, res) => {
  res.send("PUT req made for '/' ");
});

app.delete("/", (req, res) => {
  res.send("DELETE req made for '/' ");
}); 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
