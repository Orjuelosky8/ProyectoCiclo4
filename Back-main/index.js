const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./src/routes/users");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
/*


//imports
/*
const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')

let dbConnector = require('./dbConnector');

const port = 8080
const app = express()
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.post('/credentials', async (req, res) => {
    let data = await dbConnector.findData('credentials', {
        username: req.body.username,
        password: req.body.password,
    })
  res.send(data);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


*/
/*
dbConnector.testConnection().then(function(e){
    console.log("GOOD!, el return de la promesa es: " + e);
})
dbConnector.findData('UsersPasswords', {
    id_user : 103
}).then(function(e){
    console.log("GOOD!: " + e);
})*/
