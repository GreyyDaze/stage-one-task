// selecting an element
const menuBtn = document.querySelector(".menu-btn");
const menuLinks = document.querySelector(".menu-links");

// add event listener
menuBtn.addEventListener("click", () => {
  menuLinks.classList.toggle("active");
});

// close the menu on link clink
const menuLink = document.querySelectorAll(".menu-links a");

menuLink.forEach(link => {
    link.addEventListener("click", () => {
        menuLinks.classList.remove("active");
    })  
});