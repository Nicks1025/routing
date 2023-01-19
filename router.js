const express = require('express')
const route = express.Router()
var accounts = require("./database")


// // GET request
// route.get("/accounts", (req,res) => {
//     res.json({userData : accounts})
// })

// // POST request
// route.post("/accounts",(req,res) => {
//     const incomingAccount = req.body
//     accounts.push(incomingAccount)
//     res.json(accounts)
// })


// // PUT http method
// route.put("/accounts/:id", (req,res)=>{
//     const accountId=Number(req.params.id)
//     const body = req.body
//     const account = accounts.find((account)=> account.id == accountId)
//     const index = accounts.indexOf(account)

//     if(!account){
//         res.status(500).send("Account Not Found")
//     }
//     else{
//         const updatedAccount = {...account, ...body}
//         accounts[index] = updatedAccount
//         res.send(account)
//     }
// })

// delete request
route.delete("/accounts/:id",(req,res) => {
    const accountId = Number(req.params.id)
    const newAccounts = accounts.filter((account) => account.id != accountId)

    if(!newAccounts){
        res.status(500).send("Account Not Found")
    }
    else{
        accounts = newAccounts
        res.send(accounts)
    }
})


route.get("/accounts/:id",(req,res) => {
    const accountId = Number(req.params.id)
    const getAccount = accounts.find((account) => account.id == accountId)
    
    if(!getAccount){
        res.status(500).send("Account Not Found")
    }
    else{
        res.json(getAccount)
    }
})
module.exports = route