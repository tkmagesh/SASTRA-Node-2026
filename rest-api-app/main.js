const express = require("express");
const app = express();
const port = 3000;

// in-memory data
let products = [
  { id: 101, name: "Pen", cost: 10 },
  { id: 102, name: "Pencil", cost: 5 },
  { id: 103, name: "Marker", cost: 50 },
];

app.use(express.json()) // for parsing application/json

app.get("/products", (req, res) => {
  res.json(products);
});

/* POSTMAN (testing POST)
    => method: POST
    => raw, JSON 
    => {"id" : 104, "name" : "Scribble Pad", "cost" : 25 }
*/
app.post("/products", (req, res) => {
  let newProduct = req.body;
  products.push(newProduct)
  res.status(201).json(newProduct)
});

app.put("/products", (req, res) => {
  res.send("The given product will be updated");
});

app.delete("/products", (req, res) => {
  res.send("The given product will be deleted");
}); 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
