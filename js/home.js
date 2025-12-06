
        let theme_btn = document.getElementById("theme_btn");

        theme_btn.addEventListener("click", function () {
            document.body.classList.toggle("dark_theme");

            if (theme_btn.textContent === "☀️") {
                theme_btn.textContent = "🌙";
            } else {
                theme_btn.textContent = "☀️";
            }
        });


        let menu_btn = document.getElementById("menu_btn");
        let nav_menu = document.getElementById("nav_menu");

        menu_btn.addEventListener("click", function () {
            nav_menu.classList.toggle("nav_show");
        });



        let properties = [
            {
                title: "Luxury Villa",
                price: "$1,250,000",
                details: "4 Bed | 3 Bath | NYC",
                img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/466378675.jpg?k=47439be8a91e422a1dbef4f02630d6c86f1266a815d7bd8f21b2c5ce0492bcc1&o="
            },
            {
                title: "Cozy Apartment",
                price: "$2,500 / month",
                details: "2 Bed | 2 Bath | Miami",
                img: "https://cdn.sanity.io/images/v48q37k7/production/d09208183125ab47493d5de2f8710b6faa27d7cc-3000x2000.jpg?auto=format&fit=max&q=90&w=1500"
            },
            {
                title: "Office Space",
                price: "On Request",
                details: "5000 sqft | Commercial",
                img: "https://content.instantoffices.com/sc/Prod/images/centres/1600width/99790/99790-631180.jpg"
            }
        ];

        let property_list = document.getElementById("property_list");

        for (let i = 0; i < properties.length; i++) {
            let card_html =
                '<div class="property_card">' +
                    '<img src="' + properties[i].img + '" class="property_image">' +
                    '<div class="card_content">' +
                        '<h3 class="property_title">' + properties[i].title + '</h3>' +
                        '<p class="price">' + properties[i].price + '</p>' +
                        '<p class="details">' + properties[i].details + '</p>' +
                        '<a href="#" class="btn secondary_btn">View Details</a>' +
                    '</div>' +
                '</div>';

            property_list.innerHTML += card_html;
        }