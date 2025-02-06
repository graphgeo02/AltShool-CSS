const togglePassword = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("password");

  togglePassword.addEventListener("click", () => {
    // Toggle the input type
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;

    // Change the button text/icon
    togglePassword.textContent = type === "password" ? "👁️" : "🙈";
  });