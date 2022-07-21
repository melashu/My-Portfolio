const form = document.getElementsByClassName("form")[0];
const email = document.getElementById("email");
const errorMessage = document.getElementsByClassName("error-message")[0];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value === email.value.toLowerCase()) {
    form.submit();
  } else {
    email.focus();
    errorMessage.innerHTML =
      "The form in not sent, Please enter lowercase email look likes above!";
    email.value = email.value.toLowerCase();
  }
});
