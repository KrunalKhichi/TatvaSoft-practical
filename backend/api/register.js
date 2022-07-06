const { Router } = require("express");
const route = Router();
const connect = require("../database");

route.post("/", (req, res) => {

    var sql = `INSERT INTO users (firstname, lastname, email, password, dob, role) value('${req.body.firstname}', '${req.body.lastname}', '${req.body.email}', '${req.body.password}', '${req.body.dob}','${req.body.role}')`

    connect.query(sql, function(err, result){
        if(err) throw err;

        res.send(result)
    })
   
})


module.exports = route;
