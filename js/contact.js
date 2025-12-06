let btn = document.getElementById("theme_change");
btn.addEventListener("click", function () {
    let body = document.body;
    let current = body.getAttribute("data-theme");

    if (current === "bright") {
        body.setAttribute("data-theme", "dark");
        btn.textContent = "🌙";
    } else {
        body.setAttribute("data-theme", "bright");
        btn.textContent = "☀️";
    }
});

let contact_form = document.getElementById("contact_form");
let form_msg = document.getElementById("form_msg");

contact_form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name_value = document.getElementById("name").value.trim();
    let email_value = document.getElementById("email").value.trim();
    let message_value = document.getElementById("message").value.trim();

    if (name_value === "" || email_value === "" || message_value === "") {
        form_msg.textContent = "Please fill all required fields.";
        form_msg.style.color = "red";
    } else {
        form_msg.textContent = "Your message has been sent successfully!";
        form_msg.style.color = "green";

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
    }
});