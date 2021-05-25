
const IP = "192.168.88.26";
const PORT = 3000;
const GET_MESSAGES = "http://" + IP + ":" + PORT + "/messages";
const POST_MESSAGE = "http://" + IP + ":" + PORT + "/message";


// ==================================| Display Message |================================== // 
function postMessage(event) {
    event.preventDefault();
    let all_data = {messages:get_input.value, Italic:isClick_Italic, Bold:isClick_bold};
    console.log(all_data);

    axios.post(POST_MESSAGE,all_data)
    .then((response) => {
        displayData(response.data);
        console.log(response.data);
    })
    get_input.value = "";
}

const btnSend = document.querySelector("#paper_plane");
btnSend.addEventListener("click", postMessage);

// ==============================| DISPLAY DATA |============================== //

function displayData(messages) {
    console.log(messages);
    let chat_box = document.querySelector(".chat-box");
    if (chat_box !== null) {
        chat_box.remove();
    }
    
    chat_box = document.createElement("div");
    chat_box.className = "chat-box";
    messageContainer.appendChild(chat_box);

    for (let message of messages) {
        if (message.get_input !== "" && message.get_input !== null) {
            
            let chat_outgoing = document.createElement("div");
            chat_outgoing.className = "chat outgoing";
            chat_box.appendChild(chat_outgoing);
        
            let detailes = document.createElement("div");
            detailes.className = "details";
            chat_outgoing.appendChild(detailes);
        
            let P = document.createElement("p");
            P.textContent = message.messages;
            detailes.appendChild(P);
            
            let images = document.createElement("img");
            // images.src = "";
            chat_outgoing.appendChild(images);
        }
    }
    get_input.value = "";
}

function loadData() {
    axios.get(GET_MESSAGES).then((response) => {
        displayData(response.data);
    })
}

// =================================| BOLD | ================================== //
let count_click_bold = 0;
let isClick_bold = true;
function bold_Message() {
    get_input.style.fontWeight="bold";
    count_click_bold += 1;
    if (count_click_bold %2 == 0){
        get_input.style.fontWeight="normal";
        isClick_bold = true;
    }else{
        isClick_bold = false;
    }
}
let btn_Bold = document.querySelector("#bold");
btn_Bold.addEventListener("click", bold_Message);

// =================================| ITALIC | ================================== //
let count_click_Italic = 0;
let isClick_Italic = true;
function Italic_Message() {
    get_input.style.fontWeight="italic";
    count_click_Italic += 1;
    if (count_click_bold %2 == 0){
        get_input.style.fontWeight="normal";
        isClick_Italic = true;
    }else{
        isClick_Italic = false;
    }
}
let btn_Italic = document.querySelector("#italic");
btn_Italic.addEventListener("click", Italic_Message);

// =====================================| Emoji |============================================ //
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

// ==========================================| Key-Up |=========================================== //
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