// Typing effect
const text = "Riya Kumari Singh";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

typeEffect();

// Button actions
function hireMe() {
  alert("Thanks for your interest! Contact me soon 🚀");
}

function contactMe() {
  alert("Email: rs678959000@gmail.com");
}
