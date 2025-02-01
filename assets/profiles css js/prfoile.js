let ham = document.getElementById("hamburger");
let buttonDiv = document.getElementById("button-div");
let iconDiv = document.getElementById("icon-div");
ham.addEventListener("click", ()=>{
    buttonDiv.classList.toggle("active");
    iconDiv.classList.toggle("active");
})