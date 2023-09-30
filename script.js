const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

const toggle = document.getElementById("toggle");
const confirmPassword = document.getElementById("confirmpassword");

togglePassword.addEventListener("click", ()=>{
    const type = password.getAttribute("type")
    password.setAttribute("type", type === "password" ? "text" : "password");
});

toggle.addEventListener("click", ()=>{
    const type2 = confirmPassword.getAttribute("type")
    confirmPassword.setAttribute("type", type2 === "password" ? "text" : "password");
});

