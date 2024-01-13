//   search btn

searchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchform.classList.toggle("active");
}

//    login form

var loginform = document.querySelector(".login-form-container");
document.querySelector("#login-btn").onclick = () => {
    loginform.classList.toggle("active")
}

document.querySelector("#close-login-btn").onclick = () => {
    loginform.classList.remove("active");
}