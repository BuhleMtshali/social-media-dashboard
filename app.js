let inputCheckBox = document.getElementById("dark-mode-checkbox");
let headings = document.querySelectorAll("h1");
let cardsBg = document.querySelectorAll(".cards");
let headingTwo = document.querySelectorAll("h2");
let lighterText = document.querySelectorAll(".lighter-text");
let innerHeadings = document.querySelectorAll(".heading");
let bodyBg = document.querySelector("body");
let handle = document.getElementsByClassName("handle");
//begining of function

inputCheckBox.addEventListener("change", lightMode);
function lightMode() {
  bodyBg.style.backgroundColor = "hsl(0, 0%, 100%)";
  headingTwo.forEach((heading) => {
    heading.style.color = "hsl(230, 17%, 14%)";
  });
  headings.forEach((h1) => {
    h1.style.color = "hsl(230, 17%, 14%)";
  });
  cardsBg.forEach((cards) => {
    cards.style.backgroundColor = "hsl(227, 47%, 96%)";
  });
}
