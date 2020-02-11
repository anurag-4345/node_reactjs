
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");




//server static file css, js , etc...
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//import routes file
require("./routes")(app);

//set the view engine
app.set("view engine", "ejs")
//listen the server and server always went any port which is port variable
app.listen(port , ()=>{
    console.log("server is running "+ port);
});