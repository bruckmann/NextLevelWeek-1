const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//db.serialize(() => {
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places2 (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             itens TEXT
//         );
//     `)

//         const query = `
//         INSERT INTO places2 (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             itens

//         ) VALUES (?,?,?,?,?,?,?);
//     `
//     const dados = [ 
//         "http://localhost:3000/assets/undraw_throw_away_ldjd.svg",
//         "paperSider",
//         "Guilherme Gemballa, Jardim Amêrica",
//         "N° 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Pápeis e Papelão"
//     ]

//     function afterInsertData(err) {
//         if (err) {
//             return console.log(err)
//         }

//         console.log("Cadastrado com sucesso")
//         console.log(this)
//     }

//    db.run(query , dados , afterInsertData)

//    db.all(`SELECT * FROM places2` , function(err, rows) {
//      if (err) {
//    console.log(err)
//    }
//    
//    console.log("Aqui estão os registros")
//    console.log(rows)
//    })

// db.run(`DELETE FROM places2 WHERE id = ?` , [3] , function(err) {
//     if (err) {
//         console.log(err)
//     }

//     console.log("registro deletado com sucesso!")
 // })

//})