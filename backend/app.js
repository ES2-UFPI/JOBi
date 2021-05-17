const express = require("express")

const app = express()

app.get("/", (req,res) => {
    res.send("Backend JOBi rodando!");
})

app.listen(3333, () => {
    console.log("Rodando na 3333");
});
