const { Router } = require("express");
const route = Router();
const connect = require("../database");

route.post("/create", (req, res) => {
    var sql = `INSERT INTO blogs (title, description, status, category, author) value('${req.body.title}', '${req.body.description}', '${req.body.status}', '${req.body.category}', '${req.body.author}')`

    connect.query(sql, function(err, result){
        if(err) throw err;

        res.send(result)
    })
})

route.get("/", (req, res) => {
    var sql = `SELECT * FROM blogs;`

    connect.query(sql, function(err, result){
        if(err) throw err;

        res.send(result)
    })
})
 
route.patch("/update", (req, res) => {
    var sql = `UPDATE blogs SET title = '${req.body.title}', description = '${req.body.description}', status = '${req.body.status}', category = '${req.body.category}', author = '${req.body.author}' WHERE id = ${req.query.id};`

    connect.query(sql, function(err, result){
        if(err) throw err;

        res.send(result)
    })
})

route.delete("/delete", (req, res) => {
    var sql = `DELETE FROM blogs WHERE id = ${req.query.id};`

    connect.query(sql, function(err, result){
        if(err) throw err;

        res.send(result)
    })
})


module.exports = route;
