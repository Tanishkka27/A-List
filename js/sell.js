let theme_btn = document.getElementById("theme_change");

theme_btn.addEventListener("click", function () {
    let current = document.body.getAttribute("data-theme");

    if (current === "bright") {
        document.body.setAttribute("data-theme", "dark");
        theme_btn.textContent = "🌙";
    } else {
        document.body.setAttribute("data-theme", "bright");
        theme_btn.textContent = "☀️";
    }
});

let property_form = document.getElementById("property_form");

property_form.addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Your property details have been submitted successfully!");
    property_form.reset();
});