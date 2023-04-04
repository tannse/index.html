// Turn on and off when clicks on sign up
let regBTN = document.querySelector(".header_cta");
regBTN.addEventListener("click", function () {
    let regElement = document.querySelector("#sign-up-Page");
    regElement.style.display = "block ";
});
// let btnExitreg = document.querySelector("#sign-up-Page .btn-exit");
// btnExitreg.addEventListener("click", function () {
//     let regElement = document.querySelector("#sign-up-Page");
//     regElement.style.display = "none";
// });
//
// Scroll to top website and sticky head off
let prevScrollPos = window.pageYOffset;
let headerElement = document.getElementById("header_block");

window.onscroll = function () {
    let topPos = window.pageYOffset;
    if (prevScrollPos > topPos) {
        headerElement.classList.add("active");
        headerElement.classList.add("active-filter");
    } else {
        headerElement.classList.remove("active");
        headerElement.classList.add("active-filter");
    }
    prevScrollPos = topPos;
    if (topPos == 0) {
        headerElement.classList.remove("active");
        headerElement.classList.remove("active-filter");
    }
};
// Scroll hair style list
let btnleft = document.querySelector(".btn-left");
let btnright = document.querySelector(".btn-right");
const hairListElement = document.querySelector(".hair-list");
btnright.addEventListener("click", function (e) {
    hairListElement.scrollLeft += 1300;
});
btnleft.addEventListener("click", function (e) {
    hairListElement.scrollLeft -= 1300;
});

// Show an post when click on element
const itemsServiceElement = document.querySelectorAll(".service_item");
const itemsContainer = document.querySelector(".service_container");

itemsServiceElement.forEach(function (item) {
    item.addEventListener("click", function () {
        const contentId = item.getAttribute("data-content");
        let serviceBlockElement = document.getElementById("service_block");
        const content = document.getElementById(contentId);
        const containerElement =
            serviceBlockElement.querySelector(".service_container");
        containerElement.style.opacity = "1";
        containerElement.style.height = "450px";
        itemsContainer.innerHTML = content.innerHTML;
    });
});
//Slide Image
slideIndex = 0;
slideShow();
function slideShow() {
    const slides = document.getElementsByClassName("slideshow-image");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.opacity = 1;
    setTimeout(slideShow, 3000);
}
// Slide review
let slideReviewIndex = 0;
reviewShow();

function reviewShow() {
    const slidesReview = document.getElementsByClassName("testimonial_content");
    for (let i = 0; i < slidesReview.length; i++) {
        slidesReview[i].style.opacity = 0;
    }
    slideReviewIndex = (slideReviewIndex + 1) % slidesReview.length;
    slidesReview[slideReviewIndex].style.opacity = 1;

    setTimeout(reviewShow, 3000);
}

// Event scroll mouse down hidden nav-mobile
let navMobileElement = document.querySelector(".nav_mobile");
let checkboxElement = document.getElementById("nav_mobile_input");
window.addEventListener("scroll", function () {
    if (checkboxElement.checked) {
        checkboxElement.checked = false;
    }
});
