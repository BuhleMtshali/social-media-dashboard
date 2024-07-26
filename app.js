let inputCheckBox = document.getElementById("dark-mode-toggle");
let headings = document.querySelectorAll("h1");
let cardsBg = document.querySelectorAll(".cards");
let headingTwo = document.querySelectorAll("h2");
let lighterText = document.querySelectorAll(".lighter-text");
let innerHeadings = document.querySelectorAll(".heading");
let bodyBg = document.querySelector("body");
let handle = document.getElementsByClassName("handle");
let smallerDivsBg = document.querySelectorAll(".overView");
let inputLabel = document.querySelector("label");
let isDarkMode = false;

inputCheckBox.addEventListener("click", toggleMode);

function toggleMode() {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    // Dark mode styles
    bodyBg.style.backgroundColor = "hsl(230, 17%, 14%)";
    headingTwo.forEach((heading) => {
      heading.style.color = "hsl(0, 0%, 100%)";
    });
    innerHeadings.forEach((heading) => {
      heading.style.color = "hsl(0, 0%, 100%)";
    });
    headings.forEach((h1) => {
      h1.style.color = "hsl(0, 0%, 100%)";
    });
    cardsBg.forEach((cards) => {
      cards.style.backgroundColor = "hsl(228, 28%, 20%)";
    });
    smallerDivsBg.forEach((overView) => {
      overView.style.backgroundColor = "hsl(228, 28%, 20%)";
    });
    inputLabel.style.color = "hsl(0, 0%, 100%)";
  } else {
    // Light mode styles
    bodyBg.style.backgroundColor = "hsl(0, 0%, 100%)";
    headingTwo.forEach((heading) => {
      heading.style.color = "hsl(230, 17%, 14%)";
    });
    innerHeadings.forEach((heading) => {
      heading.style.color = "hsl(230, 17%, 14%)";
    });
    headings.forEach((h1) => {
      h1.style.color = "hsl(230, 17%, 14%)";
    });
    cardsBg.forEach((cards) => {
      cards.style.backgroundColor = "hsl(227, 47%, 96%)";
    });
    smallerDivsBg.forEach((overView) => {
      overView.style.backgroundColor = "hsl(227, 47%, 96%)";
    });
    inputLabel.style.color = "hsl(230, 17%, 14%)";
  }
}
