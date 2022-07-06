const express = require("express");
var cors = require('cors')

const PORT = 5000;
const app = express()

//Routes
const registerRoute = require("./api/register");
const loginRoute = require("./api/login")
const blogRoute = require("./api/blog")

app.use(cors())
app.use(express.json())

app.use("/register", registerRoute);
app.use("/login", loginRoute);
app.use("/blog", blogRoute);

app.listen(PORT, (error) => {
  if (error) throw new Error("Server not started!!");
  
  console.log("Server started on Port: ", PORT);
});
