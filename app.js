//   search btn

searchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchform.classList.toggle("active");
    console.log("search form");
}

//    login form

var loginform = document.querySelector(".login-form-container");
document.querySelector("#login-btn").onclick = () => {
    loginform.classList.toggle("active");
    console.log("log in form");
}

document.querySelector("#close-login-btn").onclick = () => {
    loginform.classList.remove("active");
    console.log("log in remove");
}