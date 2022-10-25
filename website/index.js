const homeButton = document.getElementById("homeButton");
const educationButton = document.getElementById("educationButton");
const careerButton = document.getElementById("carreerButton");
const linkedInButton = document.getElementById("linkedInButton");

function handleMouseover() {
  homeButton.style.color = "blue";
}

function handleMouseleave() {
  homeButton.style.color = "#390202";
}

homeButton.addEventListener("mouseenter", handleMouseover);
homeButton.addEventListener("mouseleave", handleMouseleave);

function handleMouseover1() {
  educationButton.style.color = "blue";
}

function handleMouseleave1() {
  educationButton.style.color = "#390202";
}

educationButton.addEventListener("mouseenter", handleMouseover1);
educationButton.addEventListener("mouseleave", handleMouseleave1);

function handleMouseover2() {
  careerButton.style.color = "blue";
}

function handleMouseleave2() {
  careerButton.style.color = "#390202";
}

careerButton.addEventListener("mouseenter", handleMouseover2);
careerButton.addEventListener("mouseleave", handleMouseleave2);

linkedInButton.addEventListener("mouseenter", handleMouseover);
linkedInButton.addEventListener("mouseleave", handleMouseleave);
