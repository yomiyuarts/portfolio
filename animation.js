const modal = document.getElementById("animationModal");

const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const watchBtn = document.getElementById("watch-btn");

const closeModalButton = document.getElementById("closeModal");

const portfolioSection = document.getElementById("portfolio-section");


// Background images

const bgImages = [
    "images/pinkscallopbg.PNG",
    "images/1.png",
    "images/2.png",
    "images/3.png",
    "images/pinkscallopbg.PNG"
];

let bgIndex = 0;


// Cycle background

portfolioSection.addEventListener("click", function () {

    bgIndex = (bgIndex + 1) % bgImages.length;

    document.querySelector(".portfolio-body").style.backgroundImage =
        `url("${bgImages[bgIndex]}")`;

});


// Open modal

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(function (img) {

    img.addEventListener("click", function () {

        modalImg.src = img.src;
        modalImg.alt = img.alt;

        modalTitle.textContent = img.dataset.title;
        modalDesc.textContent = img.dataset.description;


        // Show Watch button only if a link exists

        if (img.dataset.link) {

            watchBtn.href = img.dataset.link;

            watchBtn.classList.add("active");

        } else {

            watchBtn.href = "";

            watchBtn.classList.remove("active");

        }


        // Open modal

        modal.classList.add("active");

    });

});


// Close modal with X

closeModalButton.addEventListener("click", function () {

    modal.classList.remove("active");

});


// Close modal by clicking outside the content

modal.addEventListener("click", function (event) {

    if (event.target === modal) {

        modal.classList.remove("active");

    }

});


// Close modal with Escape

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        modal.classList.remove("active");

    }

});


// Homepage button

function goToHomepage() {

    window.location.href = "index.html";

}