const { response } = require("express");

const IP = "192.168.88.32";
const PORT = 3000;
const LOGIN_URL = "http://" + IP + ":" + PORT + "/app";

function getMessage(event) {
    event.preventDefault();
    
    let chat_box = document.createElement("div");
    chat_box.className = "chat-box";
    messageContainer.appendChild(chat_box);

    let chat_outgoing = document.createElement("div");
    chat_outgoing.className = "chat outgoing";
    chat_box.appendChild(chat_outgoing);

    let detailes = document.createElement("div");
    detailes.className = "details";
    chat_outgoing.appendChild(detailes);

    let P = document.createElement("p");
    detailes.appendChild(P);
    
    let images = document.createElement("img");
    images.src = "";
    chat_outgoing.appendChild(images);
    
    P.textContent += get_input.value;
    get_input.value == "";
    
}

const btnSend = document.querySelector("#paper_plane");
btnSend.addEventListener("click", getMessage);

// ========================== //

const get_input = document.querySelector("#textArea");
const messageContainer = document.querySelector(".content_Chat");

function sendData(e) {
    let all_data = {messages:get_input.value};
    axios.post(LOGIN_URL,all_data)
    .then(response) => {
        
    }
}