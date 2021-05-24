const express = require("express");
const app = express();
const port = 3000;

let users = [
    { username: "PHEARAK", password: "00000" },
    { username: "THIN", password: "11111" },
    { username: "SARETH", password: "22222" },
    { username: "VONTHORN", password: "33333" },
    { username: "NHORK", password: "44444" },
    { username: "THEAV", password: "55555" }
  ];
  
  
app.listen(process.env.PORT|| port, () => {
console.log("server running...");
});

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));