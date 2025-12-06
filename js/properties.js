let properties = [
    {
        title: "Family Home",
        price: 550000,
        beds: 3,
        type: "sale",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLm_NRr0Tj8l8WaVSSorKqAB0l5Y__u0yfcw&s",
        details: "3 Bed | 2 Bath | Suburb"
    },
    {
        title: "Studio Rental",
        price: 1800,
        beds: 1,
        type: "rent",
        img: "https://www.brightlogic-estateagents.co.uk/KENS/upload/2402-1.jpg",
        details: "1 Bed | 1 Bath | Downtown"
    },
    {
        title: "Commercial Lot",
        price: 800000,
        beds: 0,
        type: "sale",
        img: "https://media.istockphoto.com/id/1166526747/photo/office-building-exterior-with-parking-lot.jpg?s=612x612&w=0&k=20&c=PPVPFrtzm0H-OF26frvF8GE0g5j0pPFZyBxmgFN5bOs=",
        details: "Zoned C-1 | 1 Acre"
    },
    {
        title: "Luxury Penthouse",
        price: 3500000,
        beds: 5,
        type: "sale",
        img: "https://i.pinimg.com/originals/e5/5a/c8/e55ac83e643a44caa46b5a97d2bee0e1.jpg",
        details: "5 Bed | 4 Bath | City View"
    },
    {
        title: "Beach Getaway",
        price: 4200,
        beds: 3,
        type: "rent",
        img: "https://q-xx.bstatic.com/xdata/images/hotel/max500/596399705.jpg?k=0d4df5fc0a4952380be995d136e896aee6608f84e9c7af836688c269c4adccdb&o=",
        details: "3 Bed | 2 Bath | Near Ocean"
    },
    {
        title: "New Build Home",
        price: 720000,
        beds: 4,
        type: "sale",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2uhPdKKNGjMXBO-oNJGRADeBX5FFnIAwLQiUy7NtAArVSZTkb2yekSlQQIMlHrlc8B6uJjKd2TxJttxs4xn6taEY2P_Ze4e3kmCWxiHrcw6L9V2KR0lKr1bmvHL_XOst3T3eXRVIT3yU/s1920/modern-home.jpg",
        details: "4 Bed | 3 Bath | Quick Sale"
    }
];


function show_properties(list) {
    let container = document.getElementById("property_list");
    container.innerHTML = "";

    list.forEach(function(item) {
        let card = `
            <div class="property-card">
                <img src="${item.img}" class="property-image">
                <div class="card-content">
                    <h3>${item.title}</h3>
                    <p class="price">$${item.price}</p>
                    <p class="details">${item.details}</p>
                    <a href="#" class="btn secondary-btn details-btn">Details</a>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

show_properties(properties);


document.getElementById("apply_filter").addEventListener("click", function() {

    let type_filter = document.getElementById("filter_type").value;
    let beds_filter = Number(document.getElementById("filter_beds").value);
    let sort_value = document.getElementById("sort_price").value;

    var filtered = properties.filter(function(item) {

        if (type_filter !== "all" && item.type !== type_filter) {
            return false;
        }

        if (beds_filter && item.beds < beds_filter) {
            return false;
        }

        return true;
    });

    if (sort_value === "high") {
        filtered.sort(function(a, b) { return b.price - a.price; });
    }
    if (sort_value === "low") {
        filtered.sort(function(a, b) { return a.price - b.price; });
    }

    show_properties(filtered);
});


document.getElementById("theme_change").addEventListener("click", function() {
    let body = document.body;
    let theme = body.getAttribute("data-theme");

    if (theme === "bright") {
        body.setAttribute("data-theme", "dark");
        this.textContent = "🌙";
    } else {
        body.setAttribute("data-theme", "bright");
        this.textContent = "☀️";
    }
});


document.getElementById("nav_toggle").addEventListener("click", function() {
    let menu = document.getElementById("nav_menu");
    menu.classList.toggle("nav_open");
});