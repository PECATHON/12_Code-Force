document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let errorMsg = document.getElementById("errorMessage");
    let loginBox = document.getElementById("loginBox");

    const correctUser = "CodeForce";
    const correctPass = "pecathon";

    loginBox.classList.remove("login-error", "login-success", "login-center-glow");
    errorMsg.textContent = "";

    if (username === correctUser && password === correctPass) {

        errorMsg.style.color = "green";
        errorMsg.textContent = "Login successful! Redirecting...";

        loginBox.classList.add("login-success");

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1500);
    }

    else {
        errorMsg.style.color = "red";
        errorMsg.textContent = "Invalid username or password!";

        loginBox.classList.add("login-error");

        loginBox.classList.add("login-center-glow");

        setTimeout(() => {
            errorMsg.textContent = "";
        }, 2000);
    }
});