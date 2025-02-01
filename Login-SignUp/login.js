let heading = document.getElementById("heading");
let headingPara = document.getElementById("heading-para");
let google = document.getElementById("google");
let divider = document.getElementById("divider");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let inputSubmit = document.getElementById("input-submit");
let change = document.getElementById("change");

change.addEventListener("click", () => {
  if (change.innerHTML === "Login") {
    heading.innerHTML = "Log In";
    headingPara.innerHTML = "Enter your credentials to log in";
    google.innerHTML = `<img src="./google.svg" alt="Google Icon"> Login with Google`;
    divider.innerHTML = "OR LOG IN WITH EMAIL";
    input1.style.display = "none";
    input2.style.display = "none";
    input3.style.display = "none";
    inputSubmit.innerHTML = "Login";
    change.innerHTML = "Sign Up";
  }
  else{
    heading.innerHTML = "Sign Up";
    headingPara.innerHTML = "Please sign up your account";
    google.innerHTML = `<img src="./google.svg" alt="Google Icon"> Sign Up with Google`;
    divider.innerHTML = "OR SIGN UP WITH EMAIL";
    input1.style.display = "block";
    input2.style.display = "block";
    input3.style.display = "block";
    inputSubmit.innerHTML = "Sign Up";
    change.innerHTML = "Login";
  }
});
