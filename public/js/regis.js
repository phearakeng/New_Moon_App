const FS = require("fs");

let registerProcess = (response, first_username_regis, last_username_regis, email_user_regis, pass_user_regis, conPass_user_regis) => {
    let USER_REGIS_REQUEST = response.data;
    for (let REGIS of USER_REGIS_REQUEST) {
        
        // ======================| Keep Data To File Save_Regis JSON |======================= //
        let DATA_REGIS_OBJECT = {
            First_Name_Regis = first_username_regis,
            Last_Name_Regis = last_username_regis,
            Email_Regis = email_user_regis,
            Password_Regis = pass_user_regis,
            Con_Password_Regis = conPass_user_regis
        };
        KEEP_DATA_USER_REGISTER.push(DATA_REGIS_OBJECT);
        console.log(KEEP_DATA_USER_REGISTER);
        localStorage.setItem("REGISTER_DATA", JSON.stringify(KEEP_DATA_USER_REGISTER));
    }

}
let KEEP_DATA_USER_REGISTER = [];

// ===================| GET DATA FROM REGISTER INPUT |==================== //
let register = (e) => {

    // ================| MAIN |================= //
    let first_Name = document.querySelector("#first_name").value;
    let last_Name = document.querySelector("#last_name").value;
    let email_user = document.querySelector("#email").value;
    let pass_user = document.querySelector("#password").value;
    let con_pass_user = document.querySelector("#confirm_pass").value;

    const REGISTER_URL = userEntPoint + "/register";
    axios
    .get(REGISTER_URL)
    .then(response => registerProcess(response, first_Name, last_Name, email_user, pass_user, con_pass_user))
}

const chat_btn = document.querySelector("#chat_hear");
const userEntPoint = "http://192.168.88.15:3000"
chat_btn.addEventListener("click", register);
const cancle_btn = document.querySelector("#cancle_hear");