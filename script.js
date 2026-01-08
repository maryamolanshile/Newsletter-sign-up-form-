 const form = document.getElementById("newsletter-signup-form");
 const emailInput = document.getElementById("email-input");
 const submitBtn = document.getElementById("submit-button");
 const userEmail = document.getElementById("user-email");
 userEmail.textContent = emailInput.value;
 const sucessMessage = document.getElementById("success-message");
 const dismissBtn = document.getElementById("dismiss-button")

 submitBtn.addEventListener("click", 
    function (event) {
        event.preventDefault()
form.style.display = "none"
sucessMessage.style.display = "block"
    })