const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const email = loginForm.email.value;
  const password = loginForm.password.value;

  if (email === "admin@admin.com" && password === "admin") {
    alert("Berhasil Login....");
    window.location = "orderForm.html";
  } else {
    loginErrorMsg.style.opacity = 1;
  }
});
