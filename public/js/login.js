const IP = "192.168.88.32";
const PORT = 3000;
const LOGIN_URL = "http://" + IP + ":" + PORT + "/login";

// |Login| //
function login() {

    let USER_REQUEST = LOGIN_URL + "?username=" + username.value+"&" + "password=" + password.value;
    axios.get(LOGIN_URL).then((response) => {
        let isValid = response.data;
        for (let user of isValid) {
            console.log(user);
        }
        let text = "Login feiled!!";
        let color = "red";
    });
    let result = false;
    for (let get_User of users) {
        if (get_User.name === user_name && get_User.user_pass) {
            result = true;
        }
    }
    response.send(result);
}
const btn_chat = document.querySelector("#chat");
btn_chat.addEventListener("click", login);

// Display Data //
function displayData() {
    
}

// Load Data //
function loadData() {
    axios.get(LOGIN_URL).then((response) => {
        displayData(response.data);
        console.log(response.data);
    })
}

// Main //
const get_user_name = document.querySelector("#username");
const get_user_pass = document.querySelector("#pass");
const info_alert = document.querySelector(".info");
const sentences = document.createElement("p");
info_alert.appendChild(sentences);
const btn_cancle = document.querySelector("#cancle");
