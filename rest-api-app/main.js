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

app.put("/products/:id", (req, res) => {
  const pId = parseInt(req.params.id)
  const updatedProduct = req.body
  products = products.map(p => p.id === pId ? updatedProduct : p)
  res.status(200).json(updatedProduct)
});

app.delete("/products/:id", (req, res) => {
    const pId = parseInt(req.params.id);
    products = products.filter(p => p.id !== pId)
    res.status(200).json({})
}); 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
