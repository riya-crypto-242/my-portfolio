// Emailjs init
(function(){
  emailjs.init("rozmQelGta1xU16zZ");
})();
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

function submitForm() {
  event.preventDefault(); //
  
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_iftpxj6", "template_tw6wlxg", param)
     .then(function(respnse){
       alert("Message sent successfully");
     }, function(error) {
       alert("Failed to send" + error.text);
     });
}
 if (!params.name || !params.email || !params.message) {
    alert("Please fill all fields");
    return;
  }

  emailjs.send("service_iftpxj6", "template_tw6wlxg", params)
    .then(function(response) {
      alert("Message sent successfully 🚀");
    }, function(error) {
      alert("Failed to send message ❌");
    });
  function sendWhatsApp() {
  let name = document.getElementById("name").value;

  let message = "Hello, my name is " + name + " I visited your portfolio.";

  let url = "https://wa.me/917099728828?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}
}
