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

// making background color of nabar white on scroll
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    
    if(window.scrollY > 0){
      header.classList.add('scrolled');
    }else {
      header.classList.remove('scrolled');
    }
})

// time and day
function displayTimeAndDay() {
    const date = new Date();
    const timeInMS = date.getTime();

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const currentDay = days[date.getDay()];
    
    document.querySelector("#current-time").innerHTML = "" + timeInMS;
    document.querySelector("#current-day").innerHTML = "" + currentDay;

    console

}

setInterval(displayTimeAndDay, 1000);

