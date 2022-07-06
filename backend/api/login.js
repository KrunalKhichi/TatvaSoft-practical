const { Router } = require("express");
const route = Router();
const connect = require("../database");

route.post("/", (req, res) => {

    var sql = `SELECT * FROM users WHERE email = '${req.body.email}' AND password = '${req.body.password}'`;
    
    connect.query(sql, function(err, result){
        if(err) throw err;

        if(result.length > 0) {

            result[0].login = true
            res.send(result)
        }
        
    })
})


module.exports = route;
