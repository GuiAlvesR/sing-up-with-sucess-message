document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const errorMessage = document.getElementById("error-message");
  const sectionBackground = document.getElementById("back");
  const successMessage = document.getElementById("success");

  emailInput.addEventListener("blur", function () {
    if (!emailInput.checkValidity()) {
      errorMessage.style.display = "block";
      emailInput.style.borderColor = "#ff5f6d";
      emailInput.style.backgroundColor = "#ffe6e6";
      emailInput.style.color = "#ff5f6d";
    } else {
      errorMessage.style.display = "none";
    }
  });

  const form = document.getElementById("newsletter-form");
  form.addEventListener("submit", function (event) {
    if (!emailInput.checkValidity()) {
      errorMessage.style.display = "block";
      event.preventDefault();
    } else {
      event.preventDefault();
      sectionBackground.style.display = "none";
      successMessage.style.display = "flex";
    }
  });
});
