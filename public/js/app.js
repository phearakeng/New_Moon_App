
const IP = "https://chat-moon.herokuapp.com";
// const PORT = 3000;
const GET_MESSAGES =  IP + "/messages";
const POST_MESSAGE =  IP + "/message";


// =================| Bring User Name to Display On Header Of Chat |================== //
let storeName_OfUser = JSON.parse(localStorage.getItem("UserName"));
console.log(storeName_OfUser);

let Detailes = document.querySelector(".details");
let span = document.createElement("span");
Detailes.appendChild(span);

let active_now = document.createElement("p");
active_now.textContent = "Active now";
Detailes.appendChild(active_now);

let USER = "";
for (let custom of storeName_OfUser) {
    USER = custom.username;
    span.textContent = USER;
    span.style.fontSize = "20px";
    span.style.color = "#daff05";
}


// ==================================| Display Message |================================== // 
function postMessage(event) {
    // event.preventDefault();
    if (isTrue === false) {
        let play = document.querySelector("#audio").play();
    }
    let all_data = { messages: get_input.value, user: USER, bg_mess_color: bg_color.value, Italic: isClick_Italic, Bold: isClick_bold };
    console.log(all_data);

    axios.post(POST_MESSAGE, all_data)
        .then((response) => {
            displayData(response.data);
            console.log(response.data);
        })
    get_input.value = "";
}

const btnSend = document.querySelector("#paper_plane");
btnSend.addEventListener("click", postMessage);

// ================| Main |=============== //
const get_input = document.querySelector("#textArea");
const bg_color = document.querySelector("#color");
const messageContainer = document.querySelector(".content_Chat");


// ==============================| DISPLAY DATA |============================== //
let isTrue = true;
function displayData(messages) {
   
    console.log(messages);
    let chat_box = document.querySelector(".chat-box");
    if (chat_box !== null) {
        chat_box.remove();
    }
    messageContainer.style.background = bg_color.value;

    chat_box = document.createElement("div");
    chat_box.className = "chat-box";
    messageContainer.appendChild(chat_box);

    for (let message of messages) {
       
        if (message.get_input !== "" && message.get_input !== null) {
            // =====================| Main |===================== //
            let chat_outgoing = document.createElement("div");
            chat_outgoing.className = "chat outgoing";

            let detaile = document.createElement("div");
            detaile.className = "details";

            let sender = document.createElement("p");
            sender.textContent = message.messages;
            let receiver = document.createElement("p");

            // =====================| Chat Sender |===================== //
            if (message.user === USER) {
                detaile.style.marginLeft = "auto";
                sender.style.background = "#8000ff";

                // ======================| BOLD |====================== //
                if (message.Bold === true) {
                    sender.style.fontWeight = "normal";
                }
                else {
                    sender.style.fontWeight = "bold";
                }

                // ======================| ITALIC |====================== //
                if (message.Italic === true) {
                    sender.style.fontStyle = "normal";
                }
                else {
                    sender.style.fontStyle = "italic";
                }
            }
            
            // =====================| Chat Receiver |===================== //
            else {
                isTrue = false;
                detaile.style.marginLeft = "0px";
                sender.style.background = "#ff0040";

                // ======================| BOLD |====================== //
                if (message.Bold === true) {
                    receiver.style.fontWeight = "normal";
                }
                else {
                    receiver.style.fontWeight = "bold";
                }

                // ======================| ITALIC |====================== //
                if (message.Italic === true) {
                    receiver.style.fontStyle = "normal";
                }
                else {
                    receiver.style.fontStyle = "italic";
                }
            }
            sender.textContent = message.messages;
            detaile.appendChild(sender);
            chat_outgoing.appendChild(detaile);
            chat_box.appendChild(chat_outgoing);
        }
    }
    
}

function loadData() {
    axios.get(GET_MESSAGES)
        .then((response) => {
            displayData(response.data);
        })
        .catch((error) => {
            
        })
}

// =================================| BOLD | ================================== //
let count_click_bold = 0;
let isClick_bold = true;

function bold_Message() {
    get_input.style.fontWeight = "bold";
    count_click_bold += 1;
    if (count_click_bold % 2 == 0) {
        get_input.style.fontWeight = "normal";
        isClick_bold = true;
    } else {
        isClick_bold = false;
    }
}
let btn_Bold = document.querySelector("#bold");
btn_Bold.addEventListener("click", bold_Message);

// =================================| ITALIC | ================================== //
let count_click_Italic = 0;
let isClick_Italic = true;

function Italic_Message() {
    get_input.style.fontStyle = "italic";
    count_click_Italic += 1;
    if (count_click_Italic % 2 == 0) {
        get_input.style.fontStyle = "normal";
        isClick_Italic = true;
    } else {
        isClick_Italic = false;
    }
}
let btn_Italic = document.querySelector("#italic");
btn_Italic.addEventListener("click", Italic_Message);

// =====================================| Emoji |============================================ //
const Emoji = document.querySelector("#emoji");
const picker = new EmojiButton();
document.addEventListener('DOMContentLoaded', () => {
    picker.on('emoji', emoji => {
        document.querySelector('input').value += emoji;
    });
    Emoji.addEventListener('click', () => {
        picker.togglePicker(Emoji);
    });
});

// ==========================================| Key-Up |=========================================== //
get_input.addEventListener("keyup", function (event) {
    let count_Message = 0;
    if (event.keyCode === 13) {
        count_Message += 1;
        postMessage();
    }
})

// =====================================| NOTIFICATIONS |===================================== //

const getNotifications = document.querySelector(".icon-button");
const notification = document.querySelector(".icon-button__badge");
getNotifications.appendChild(notification);


loadData();
setInterval(loadData, 500);