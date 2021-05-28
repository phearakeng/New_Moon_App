const express = require("express");
const app = express();
const port = 3000;
const FS = require("fs");

let messageOf_data = []

let users = JSON.parse(FS.readFileSync("save-data.json"));
console.log(users);

app.listen(process.env.PORT || port, () => {
    console.log("server running...");
});

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/message", (request, response) => {
    let mess = request.body;
    messageOf_data.push(mess);
    response.send(messageOf_data);
    console.log(messageOf_data);
});

app.get("/messages", (request, response) => {
    response.send(messageOf_data);
})

app.get("/login", (request, response) => {
    response.send(users);
})

