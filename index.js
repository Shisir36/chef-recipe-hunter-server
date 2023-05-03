const express = require("express")
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors")
const chefData = require("./Data/chef.json")
const recipes = require("./Data/recipes.json")
app.use(cors())
app.get('/', (req, res) => {
res.send("data is coming")
});
app.get("/chef", (req, res) => {
    res.send(chefData)
})
app.get("/chef/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const Chefs = chefData.find((c) => c.id === id);
    if (Chefs) {
      res.send(Chefs);
    } else {
      res.status(404).send("Recipe not found");
    }
  });
app.get("/recipes", (req, res) => {
    res.send(recipes)
})
app.get("/recipes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const recipe = recipes.filter((r) => r.id === id);
    if (recipe) {
      res.send(recipe);
    } else {
      res.status(404).send("Recipe not found");
    }
  });
app.listen(port, ()=>{
    console.log(`data is coming ${port}`);
})