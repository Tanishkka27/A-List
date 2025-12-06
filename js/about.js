let theme_btn = document.getElementById("theme_btn");
theme_btn.addEventListener("click", function () {
    document.body.classList.toggle("dark_theme");

    if (document.body.classList.contains("dark_theme")) {
        theme_btn.textContent = "🌙";
    } else {
        theme_btn.textContent = "☀️";
    }
});

let agents = [
    {
        name: "Alice Smith",
        role: "Lead Broker | 15 Years Experience",
        img: "https://source.unsplash.com/300x300/?woman,portrait"
    },
    {
        name: "Bob Johnson",
        role: "Rental Specialist | Commercial",
        img: "https://source.unsplash.com/300x300/?man,portrait"
    }
];

let agents_box = document.getElementById("agents_box");

for (let i = 0; i < agents.length; i++) {
    let agent_card = document.createElement("div");
    agent_card.className = "property_card agent_card";

    agent_card.innerHTML =
        '<img src="' + agents[i].img + '" class="property_image agent_image">' +
        '<div class="card_content agent_content">' +
        '<h3 class="agent_name">' + agents[i].name + '</h3>' +
        '<p class="agent_role">' + agents[i].role + '</p>' +
        '</div>';

    agents_box.appendChild(agent_card);
}