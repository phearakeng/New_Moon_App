const express = require("express");
const app = express();
const port = 3000;

let messageOf_data = []

let users = [
    { username: "PHEARAK", password: "00000" },
    { username: "THIN", password: "11111" },
    { username: "SARETH", password: "22222" },
    { username: "VONTHORN", password: "33333" },
    { username: "NHORK", password: "44444" },
    { username: "THEAV", password: "55555" }
];


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