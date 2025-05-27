// Start Global letiables
let slideNumber = document.getElementById("slide-number");
let sliderImages = Array.from(document.images);
let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let sliderSpan = document.getElementById("indicators");
let currentSlide = 0;
// Setting CurrentSlide To LocalStorage Variable To Save Data
if (window.localStorage.getItem("slider-index")) {
    currentSlide = +window.localStorage.getItem("slider-index");
}
// End Global letiables
// Start Functions
setInterval(function () {
    for (let i = 0; i < sliderImages.length; ++i) {
        sliderImages[i].classList.remove("active");
        paginationNewUl.children[i].classList.remove("active");
    }
    currentSlide++;
    if (currentSlide === sliderImages.length) {
        currentSlide = 0;
    }
    checker()
    console.log(currentSlide);
}, 2000);
function creatingSets() {
    // Creating Ul And Their Stuff
    let indicUl = document.createElement("ul");
    indicUl.setAttribute("id", "pagination-ul");
    for (let i = 1; i <= sliderImages.length; ++i) {
        let indicLi = document.createElement("li");
        indicLi.setAttribute("data-index", i);
        indicLi.appendChild(document.createTextNode(i));
        indicUl.appendChild(indicLi);
    }
    sliderSpan.appendChild(indicUl);
}
creatingSets();
// Start The New Global Variables
let paginationNewUl = document.getElementById("pagination-ul");
// End The New Global Variables
// Handle Click On Previous And Next Buttons
function nextSlide() {
    for (let i = 0; i < sliderImages.length; ++i) {
        sliderImages[i].classList.remove("active");
        paginationNewUl.children[i].classList.remove("active");
    }
    // Stoping Current From Increasing
    if (nextButton.classList.contains("disabled")) {
        return false;
    } else {
        currentSlide++;
        window.localStorage.setItem("slider-index", currentSlide);
    }
}
function prevSlide() {
    for (let i = 0; i < sliderImages.length; ++i) {
        sliderImages[i].classList.remove("active");
        paginationNewUl.children[i].classList.remove("active");
    }
    // Stops Current From Decreasing
    if (prevButton.classList.contains("disabled")) {
        return false;
    } else {
        currentSlide--;
        window.localStorage.setItem("slider-index", currentSlide);
    }
    // console.log(currentSlide);
}
function bulletSlide() {
    for (let i = 0; i < sliderImages.length; ++i) {
        sliderImages[i].classList.remove("active");
        paginationNewUl.children[i].classList.remove("active");
    }
}
function checker() {
    slideNumber.textContent = `Slide #${currentSlide + 1} of ${sliderImages.length}`;
    sliderImages[currentSlide].classList.add("active");
    paginationNewUl.children[currentSlide].classList.add("active");
    if (currentSlide === 0) {
        prevButton.classList.add("disabled");
    } else {
        prevButton.classList.remove("disabled");
    }
    if (currentSlide === sliderImages.length - 1) {
        nextButton.classList.add("disabled");
    } else {
        nextButton.classList.remove("disabled");
    }
}
checker();
// End Functions
// Start Events Firing
nextButton.addEventListener("click", nextSlide);
nextButton.addEventListener("click", checker);
prevButton.addEventListener("click", prevSlide);
prevButton.addEventListener("click", checker);
Array.from(paginationNewUl.children).forEach(function (li) {
    li.addEventListener("click", bulletSlide);
    li.addEventListener("click", function () {
        currentSlide = +li.dataset.index - 1;
        window.localStorage.setItem("slider-index", currentSlide);
    })
    li.addEventListener("click", checker);
})
// End Events Firing