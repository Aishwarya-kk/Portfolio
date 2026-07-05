const menuBtn = document.querySelector(".menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Contact Form

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

e.preventDefault();

alert("Thank you! Your message has been sent.");

form.reset();

});