const cors = require("cors");
const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 4001;
const carController = require("./carController");

app.use(express.static('images'));

app.use(cors());

app.get("/", function(req, res) {
    console.log(carController);
    res.send(`App Running, you can check "localhost:4001/api" to get the API.`)
});

app.get("/api", function(req, res){ 
    const results = "Hello"

    res.json(results);
});

// app.get("/api/suv", function(req, res){ 
//     const results = JSON.parse(fs.readFileSync('suvJSON.json'));

//     res.json(results);
// });

app.listen(PORT, () => console.log(`Express listening on port: ${PORT}`));