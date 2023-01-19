const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const route = require("./router")

app.use(bodyParser.urlencoded({extended:false}))

const PORT = process.env.PORT || 3000

app.use("/api",route)

app.get("/", function(req,res) {
    res.end("A Simple Routing App using express")
})

app.listen(PORT, ()=> console.log(`Server started on PORT ${PORT}`))