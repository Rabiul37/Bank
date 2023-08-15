document.getElementById("btn-submit").addEventListener("click", function () {
  let email = document.getElementById("user-email");
  let password = document.getElementById("user-password");
  let emailValue = email.value;
  let passwordValue = password.value;
  email.value = "";
  password.value = "";
  if (emailValue == "rabiul37@gmail.com" && passwordValue == "R@biul37") {
    window.location.href = "bank.html";
  } else {
    alert("Wrong Password");
  }
});
//rabiul37@gmail.com R@biul37
