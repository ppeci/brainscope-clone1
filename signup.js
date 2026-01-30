const showEmailBtn = document.getElementById("showEmail");

const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

const form = document.getElementById("emailForm");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");

showEmailBtn.addEventListener("click", () => {
    showEmailBtn.style.display = "none";
    form.classList.add("show");
});
togglePassword.addEventListener("click", () => {
    passwordInput.type =
        passwordInput.type === "password" ? "text" : "password";
});
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!firstName || !lastName || !email || !password) {
        alert("All fields are required.");
        return;
    }
    const rules = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[^A-Za-z0-9]/.test(password)
    };

    if (
        !rules.length ||
        !rules.uppercase ||
        !rules.lowercase ||
        !rules.number ||
        !rules.special
    ) {
        alert(
            "Password must contain:\n" +
            "• At least 8 characters\n" +
            "• One uppercase letter\n" +
            "• One lowercase letter\n" +
            "• One number\n" +
            "• One special character"
        );
        passwordInput.value = "";
        passwordInput.focus();
        return;
    }
    alert("Account created successfully!");

    const username = `${firstName}_${lastName}`.toLowerCase();
    localStorage.setItem("username", username);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);

    window.location.href = "dashboard.html";
});

