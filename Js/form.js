const form = document.getElementsByClassName("form")[0];
const email = document.getElementById("email");
const errorMessage = document.getElementsByClassName("error-message")[0];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(email.value === email.value.toLowerCase()) {
        form.submit();
  } else {
    errorMessage.innerHTML = "Your Form Is Not Valid, Please remove Capital Letters From Email";
    }
}
)
