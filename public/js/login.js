// |Login| //
let loginProcess = (response, user_name, user_pass) => {
    let USER_REQUEST = response.data;
    let isLogined = false;
    for (let user of USER_REQUEST) {
        if (user.username === user_name && user.password === user_pass && !isLogined) {
            isLogined = true;

            let Data_User_Object = {    
                                        username: user_name, 
                                        password: user_pass    
                                    };


            keep_User_Data.push(Data_User_Object);
            console.log(keep_User_Data);
            localStorage.setItem("UserName", JSON.stringify(keep_User_Data));
        }
    }
    
    if (isLogined) 
    {
        swal("Login succesfully", "Chat Now", "success");
        window.location.href = rootEntPoint + "/chat.html";
    }
    else
    {   
        swal("Login failed!", "Please try again!", "error");
    }
}

let keep_User_Data = [];

// ===================| GET DATA FROM INPUT |==================== //
let login =  (e) => {
    let get_user_name = document.querySelector("#username").value;
    let get_user_pass = document.querySelector("#pass").value;

    const LOGIN_URL = rootEntPoint + "/login";
    axios
    .get(LOGIN_URL)
    .then(response => loginProcess(response, get_user_name, get_user_pass))
}

const btn_chat = document.querySelector("#chat");
const rootEntPoint = "http://192.168.88.15:3000"
btn_chat.addEventListener("click", login);

// ===================||=================== //


// ===================| BTN CANCLE |==================== //
// function Cancle(cancle) {
//     if (cancle === "Cancle") {
//         window.location.href = rootEntPoint;
//     }
// }
// const btn_cancle = document.querySelector("#cancle");
// btn_cancle.addEventListener("click", Cancle);

// ===================| Set To Localstorage |==================== //



// ===================| Set To Localstorage |==================== //
