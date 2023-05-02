const express = require("express")
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors")
const chefData = require("./Data/chef.json")
app.use(cors())
app.get('/', (req, res) => {
res.send("data is coming")
});
app.get("/chef", (req, res) => {
    res.send(chefData)
})

app.listen(port, ()=>{
    console.log(`data is coming ${port}`);
})