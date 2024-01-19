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

//     home section

var swipper= new Swiper('.books-list' , {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1040: {
            slidesPerView: 3
        },
    },
});

//      featured section

var swiper = new Swiper(".featured-slider",{
    spaceBetween:10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        450: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        1040: {
            slidesPerView: 4
        },
    },
});

//       new arrivals

var swiper = new Swiper(".arrivals-slider", {
    spaceBetween:10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 3
        },
        1040: {
            slidesPerView: 4
        },
    },
});

//     review section

var swiper = new Swiper(".review-slider", {
    spaceBetween:10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 3
        },
        1040: {
            slidesPerView: 4
        },
    },
})