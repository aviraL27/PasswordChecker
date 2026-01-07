const passInput = document.querySelector("#password");
const checkBtn = document.querySelector("#checkBtn");
const mssg = document.querySelector("#message");

checkBtn.addEventListener("click", () => {
    const password = passInput.value;

    let missing = "";

    if (password.length < 8) {
        missing += "• At least 8 characters\n";
    }
    if (!/[A-Z]/.test(password)) {
        missing += "• At least one uppercase letter\n";
    }
    if (!/[a-z]/.test(password)) {
        missing += "• At least one lowercase letter\n";
    }
    if (!/[0-9]/.test(password)) {
        missing += "• At least one digit\n";
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
        missing += "• At least one special character\n";
    }

    if (password.length === 0) {
        mssg.innerText = "Please enter a password";
        mssg.style.color = "orange";
    }
    else if (missing === "") {
        mssg.innerText = "Password is Strong";
        mssg.style.color = "green";
    }
    else {
        mssg.innerText = "Missing:\n" + missing;
        mssg.style.color = "red";
    }
});
