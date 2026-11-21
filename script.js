
/* =========================================
   NAIROBI UNLOCKED
   Main JavaScript
========================================= */


/* =========================================
   1. DARK AND LIGHT MODE
========================================= */

const themeButton = document.querySelector(".theme-toggle");

const savedTheme = localStorage.getItem("nairobi-theme") || "light";

// Apply the saved theme
document.documentElement.setAttribute("data-theme", savedTheme);


// Update the theme button
function updateThemeButton(theme) {

    if (!themeButton) return;

    if (theme === "dark") {

        themeButton.textContent = "☀";
        themeButton.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

    } else {

        themeButton.textContent = "☾";
        themeButton.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );

    }
}

updateThemeButton(savedTheme);


// Switch theme when clicked
if (themeButton) {

    themeButton.addEventListener("click", () => {

        const currentTheme =
            document.documentElement.getAttribute("data-theme");

        const newTheme =
            currentTheme === "dark" ? "light" : "dark";

        document.documentElement.setAttribute(
            "data-theme",
            newTheme
        );

        localStorage.setItem("nairobi-theme", newTheme);

        updateThemeButton(newTheme);

    });

}


/* =========================================
   2. MOBILE NAVIGATION
========================================= */

const menuButton = document.querySelector(".menu-toggle");
const navigationLinks = document.querySelector(".nav-links");


if (menuButton && navigationLinks) {

    menuButton.addEventListener("click", () => {

        const isOpen =
            navigationLinks.classList.toggle("active");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

    });


    // Close menu after selecting a link
    navigationLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navigationLinks.classList.remove("active");

            menuButton.setAttribute("aria-expanded", "false");

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

}

/* =========================================
   CONTACT FORM
========================================= */

const contactForm = document.querySelector("#contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        // Prevent the page from refreshing
        event.preventDefault();

        const visitorName =
            document.querySelector("#visitor-name").value.trim();

        const response =
            document.querySelector("#form-response");

        // Display confirmation
        response.textContent =
            `Karibu, ${visitorName}! Your enquiry has been received. Thank you for reaching out to Nairobi Unlocked.`;

        response.hidden = false;

        // Reset the form
        contactForm.reset();

    });

}
