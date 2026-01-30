const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

if (togglePassword && passwordInput) {
  togglePassword.addEventListener("click", () => {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  });
}

const form = document.getElementById("loginForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const emailInput = document.getElementById('email').value.trim();
    const password = passwordInput.value.trim();

    if (!emailInput || !password) {
      alert("Please enter both email and password.");
      return;
    }

    const username = emailInput.split('@')[0];

    localStorage.setItem('username', username);

    window.location.href = "dashboard.html";
  });
}

