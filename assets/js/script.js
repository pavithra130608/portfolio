/* =========================
   MOBILE NAVIGATION
========================= */

const menuIcon = document.querySelector(".menu-icon");

const navLinks = document.querySelector(".nav-links");

/* Toggle Navigation */

menuIcon.addEventListener("click", () => {

    navLinks.classList.toggle("active");
});

/* =========================
   STICKY NAVBAR EFFECT
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(44, 62, 80, 0.95)";

    } else {

        header.style.background =
            "rgba(255, 255, 255, 0.15)";
    }
});

/* =========================
   CLOSE MENU AFTER CLICK
========================= */

const navItems =
    document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("active");
    });
});

/* =========================
   CONTACT FORM HANDLING
========================= */

const contactForm =
    document.querySelector(".contact-form");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    alert(
        "Thank you! Your message has been submitted."
    );

    contactForm.reset();
});
const roles = [

    "Full Stack Developer",

    "Data Analytics Enthusiast",

    "AI Explorer",

    "FastAPI Developer"

];

let roleIndex = 0;

let charIndex = 0;

const typingText =
    document.querySelector(".typing-text");

function typeEffect() {

    if(charIndex < roles[roleIndex].length){

        typingText.textContent +=
            roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    } else {

        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {

    if(charIndex > 0){

        typingText.textContent =
            roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 50);

    } else {

        roleIndex++;

        if(roleIndex >= roles.length){

            roleIndex = 0;
        }

        setTimeout(typeEffect, 300);
    }
}

document.addEventListener(
    "DOMContentLoaded",
    typeEffect
);
const observer =
    new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");
        }
    });

});

const hiddenElements =
    document.querySelectorAll("section");

hiddenElements.forEach((el) => {

    el.classList.add("hidden");

    observer.observe(el);
});