const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/signup", function (req, res) {
    // Retrieve form data
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    // Perform signup logic here (e.g., store user data in a database)

    // Return a response to the client
    res.json({ success: true });
});

const port = 3000;
app.listen(port, function () {
    console.log(port);
});
