const express = require("express");
const server = express()
const db = require("./database/db")

server.use(express.static("public"))

server.use(express.urlencoded({extended: true}))


const nunjucks = require("nunjucks")
nunjucks.configure("src/views" , {
    express: server,
    noCache: true
})

server.get("/" , (req , res) => {
   return res.render("index.html")
})

server.get("/create-point" , (req , res) => {
    return res.render("create-point.html")
})

server.post("/savepoint" , (req, res) => {
    
    const query = ` INSERT INTO places2 (
        image,
        name,
        address,
        address2,
        state,
        city,
        itens) VALUES (?,?,?,?,?,?,?);`

    const dados = [ 
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
            ]
        function afterInsertData(err) {
            if (err) {
                return console.log(err)
        }

            console.log("Cadastrado com sucesso")
                console.log(this)
        }

    return res.send("ok")

})

server.get("/search" , (req , res) => {

    db.all(`SELECT * FROM places2`, function (err, rows) {
        if (err) {
        console.log(err);
        }

        const total = rows.length

        return res.render("search-results.html" , {places2: rows, total})

    });

    
})

server.listen(3000)