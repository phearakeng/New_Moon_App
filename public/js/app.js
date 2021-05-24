
const IP = "192.168.88.32";
const PORT = 3000;
const GET_MESSAGES = "http://" + IP + ":" + PORT + "/messages";
const POST_MESSAGE = "http://" + IP + ":" + PORT + "/message";


// Display Message // 
function postMessage(event) {
    event.preventDefault();
    let all_data = {messages:get_input.value  };
    console.log(all_data);
    axios.post(POST_MESSAGE,all_data)
    .then((response) => {
        displayData(response.data);
        console.log(response.data);
    })
}

const btnSend = document.querySelector("#paper_plane");
btnSend.addEventListener("click", postMessage);

// ========================== //

function displayData(messages) {
    console.log(messages);
    let chat_box = document.querySelector(".chat-box");
    if (chat_box !== null) {
        chat_box.remove();
    }

    for (let message of messages) {
        chat_box = document.createElement("div");
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
        
        P.textContent += message.messages;
        get_input.value == "";
    }
}

function loadData() {
    axios.get(GET_MESSAGES).then((response) => {
        displayData(response.data);
    })
}

// ================| Emoji |================ //
const Emoji = document.querySelector("#emoji");
const picker = new EmojiButton();
document.addEventListener('DOMContentLoaded', () =>{
    picker.on('emoji', emoji =>{
        document.querySelector('input').value += emoji;
    });
    Emoji.addEventListener('click', () => {
        picker.togglePicker(Emoji);
    });
});

// ================| Key-Up |=============== //
// get_input.addEventListener("keyup", function (event){
//     if(event.keyCode === 13){
//         getMessage();
//     }
// })

// ================| Main |=============== //
const get_input = document.querySelector("#textArea");
const messageContainer = document.querySelector(".content_Chat");


loadData();

// setInterval(loadData, 5000);