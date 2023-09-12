// selecting an element
const menuBtn = document.querySelector(".menu-btn");
const menuLinks = document.querySelector(".menu-links");

// add event listener
menuBtn.addEventListener("click", () => {
  menuLinks.classList.toggle("active");
});

// close the menu on link clink
const menuLink = document.querySelectorAll(".menu-links a");

menuLink.forEach((link) => {
  link.addEventListener("click", () => {
    menuLinks.classList.remove("active");
  });
});

// making background color of nabar white on scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// time and day
function displayTimeAndDay() {
  const date = new Date();
  const currentTimeInMs = Date.now();

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const currentDay = days[date.getDay()];

  document.querySelector("#current-time").innerHTML = "" + currentTimeInMs;
  document.querySelector("#current-day").innerHTML = "" + currentDay;
}

setInterval(displayTimeAndDay, 1000);

// nav links on click
function addActiveClass() {
  const activeLink = document.activeElement;

  menuLink.forEach((link) => {
    if (link.classList.contains("current-link")) {
      link.classList.remove("current-link");
    }
  });

  if (activeLink && activeLink.tagName === "A") {
    activeLink.classList.add("current-link");
  }
}

document.addEventListener("click", addActiveClass);
