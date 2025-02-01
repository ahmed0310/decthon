// -------------------------------------------------------
// CHANGING COLOR OF LINKS IN NAVBAR WHEN CURSOR HOVERS OVER THEM
const links = Array.from(document.getElementsByClassName('link'));
links.forEach(link => {
    link.addEventListener("mouseover", () => {
        link.querySelector('i').style.color = '#149ddd';
        link.querySelector('span').style.color = '#fff';
    });

    link.addEventListener("mouseout", () => {
        link.querySelector('i').style.color = '#a8a9b4';
        link.querySelector('span').style.color = '#a8a9b4';
    });
});
// ------------------ HAMBURGER ---------------------

let ham = document.getElementById('ham');
ham.addEventListener("click", ()=> {
    let menu = document.getElementById('menu');
    menu.classList.toggle('active');
})


// ----------DARK THEME------------

let themeChanger = document.getElementById("theme-changer");

themeChanger.addEventListener("click", ()=> {
    let wave1 = document.getElementById("wave1");
    let wave2 = document.getElementById("wave2");
    let wave3 = document.getElementById("wave3");
    let wave4 = document.getElementById("wave4");
    let headings = Array.from(document.getElementsByClassName("headings"));
    let details = document.getElementById("details");
    let socialLinks = document.getElementById("social-links");
    wave1.style.transition = ".5s";
    wave2.style.transition = ".5s";
    wave3.style.transition = ".5s";
    wave4.style.transition = ".5s";

    if(themeChanger.classList.contains("dark-active")){
        themeChanger.classList.remove("dark-active")
        wave1.style.backgroundColor = "";
        wave2.style.backgroundColor = "";
        wave3.style.backgroundColor = "";
        wave4.style.backgroundColor = "";
        details.style.backgroundColor = "";
        socialLinks.style.backgroundColor = "";

        wave1.querySelectorAll("p").forEach((p) => {
            p.style.color = "";
        })
        wave2.querySelectorAll("p").forEach((p) => {
            p.style.color = "";
        })

        wave2.querySelectorAll("h3").forEach((names) => {
            names.style.color = "";
        })

        wave3.querySelectorAll("p").forEach((p) => {
            p.style.color = "";
        })
        wave4.querySelectorAll("p").forEach((p) => {
            p.style.color = "";
        })

        wave3.querySelectorAll("h4").forEach((h) => {
            h.style.color = "";
        })

        headings.forEach((heading) => {
            heading.style.color = "";
        })

        details.querySelectorAll("h4").forEach((a) => {
            a.style.color = "";
        })

        wave1.querySelector("h3").style.color = "";
    }
    else{
        themeChanger.classList.add("dark-active")
        wave1.style.backgroundColor = "#1b1d1e";
        wave2.style.backgroundColor = "#343a40";
        wave3.style.backgroundColor = "#1b1d1e";
        wave4.style.backgroundColor = "#343a40";
        details.style.backgroundColor = "#272829";
        socialLinks.style.backgroundColor = "#272829";

        wave1.querySelectorAll("p").forEach((p) => {
            p.style.color = "white";
        })
        wave2.querySelectorAll("p").forEach((p) => {
            p.style.color = "white";
        })
        wave2.querySelectorAll("h3").forEach((names) => {
            names.style.color = "white";
        })
        wave3.querySelectorAll("p").forEach((p) => {
            p.style.color = "white";
        })
        wave4.querySelectorAll("p").forEach((p) => {
            p.style.color = "white";
        })

        wave3.querySelectorAll("h4").forEach((h) => {
            h.style.color = "white";
        })

        headings.forEach((heading) => {
            heading.style.color = "#149ddd";
        })

        details.querySelectorAll("h4").forEach((a) => {
            a.style.color = "white";
        })

        wave1.querySelector("h3").style.color = "#149ddd";
    }
})
// --------------CHECKING EACH SECTION IF IT COMES UNDER SCREEN VIEW----------------
// ------Section 1
window.addEventListener('scroll', function() {
    const wave2 = document.querySelector('#wave1-content');
    const wave2Position = wave2.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
    if (wave2Position < screenPosition) {
        wave2.classList.add('show')
    }
});

// ----Section 2

window.addEventListener('scroll', function() {
    const wave2 = document.querySelector('.wave2');
    const wave2Position = wave2.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
    if (wave2Position < screenPosition) {
        wave2.classList.add('show1')
    }
});

// -----Section 3

window.addEventListener('scroll', function() {
    const wave3 = document.querySelector('.wave3');
    const wave3Position = wave3.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
    if (wave3Position < screenPosition) {
        wave3.classList.add('show1')
    }
});

// -----Section 4

window.addEventListener('scroll', function() {
    const wave4 = document.querySelector('.wave4');
    const wave4Position = wave4.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
    if (wave4Position < screenPosition) {
        wave4.classList.add('show1')
    }
});

// ------Changing Color Of Card Icon when Card is Hovered
let cards = Array.from(document.getElementsByClassName("card"));

cards.forEach((card) => {
    card.addEventListener("mouseover", ()=>{
        card.querySelector(".icon").classList.add('change-card-icon');
    })

    card.addEventListener("mouseout", ()=>{
        card.querySelector(".icon").classList.remove('change-card-icon');
    })
})

// -----Checking Color of Contact icons when the parent div is hovered

const detailsBoxes = document.querySelectorAll('.details-box');
detailsBoxes.forEach((box) => {

  box.addEventListener('mouseenter', function() {
    const icon = box.querySelector('i');
    icon.style.color = '#dff3fc';  
    icon.style.backgroundColor = '#149ddd'
  });

  box.addEventListener('mouseleave', function() {
    const icon = box.querySelector('i');
    icon.style.color = '';  
    icon.style.backgroundColor = ''
  });
});