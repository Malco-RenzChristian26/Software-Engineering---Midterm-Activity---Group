
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const errorBox = document.getElementById("errorBox");
const errorMessage = document.getElementById("errorMessage");
const lockedBox = document.getElementById("lockedBox");
const loginFormArea = document.getElementById("loginFormArea");

const loginPage = document.getElementById("loginPage");
const dashboardPage = document.getElementById("dashboardPage");

const loginButton = document.getElementById("loginButton");
const togglePassword = document.getElementById("togglePassword");

let failedAttempts = 0;
const maxAttempts = 3;


const demoUsername = "admin";
const demoPassword = "adminaccount123";

// Show or hide the password
togglePassword.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.textContent = "🙈";
        togglePassword.setAttribute("aria-label", "Hide password");
    } else {
        passwordInput.type = "password";
        togglePassword.textContent = "👁";
        togglePassword.setAttribute("aria-label", "Show password");
    }
});

// Check the login form
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (
        username === demoUsername &&
        password === demoPassword
    ) {
        errorBox.classList.add("hidden");
        loginPage.classList.add("hidden");
        dashboardPage.classList.remove("hidden");
        return;
    }

    failedAttempts++;

    const attemptsRemaining = maxAttempts - failedAttempts;

    passwordInput.value = "";

    if (failedAttempts >= maxAttempts) {
        errorBox.classList.add("hidden");
        loginFormArea.classList.add("hidden");
        lockedBox.classList.remove("hidden");
        usernameInput.disabled = true;
        passwordInput.disabled = true;
        loginButton.disabled = true;
    } else {
        errorBox.classList.remove("hidden");

        errorMessage.textContent =
            "Invalid username or password. " +
            attemptsRemaining +
            (attemptsRemaining === 1
                ? " attempt remaining."
                : " attempts remaining.");
    }
});

// Forgot password button
document.getElementById("forgotButton").addEventListener("click", function () {
    alert("Please contact SecureOne Bank support for password assistance.");
});

// Contact support button
document.getElementById("supportButton").addEventListener("click", function () {
    alert("Demo support: support@secureone.example");
});

// Dashboard feature buttons
document.querySelectorAll(".feature-card").forEach(function (button) {
    button.addEventListener("click", function () {
        const feature = button.dataset.feature;

        alert(
            feature +
            " is a demo feature and is not connected to a banking service."
        );
    });
});

// Log out
document.getElementById("logoutButton").addEventListener("click", function () {
    dashboardPage.classList.add("hidden");
    loginPage.classList.remove("hidden");

    loginForm.reset();
    errorBox.classList.add("hidden");
    passwordInput.type = "password";
    togglePassword.textContent = "👁";
    togglePassword.setAttribute("aria-label", "Show password");
});
