// Debounce function to optimize performance on resize
function debounce(func, wait = 200) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Detect screen size and update class
function detectScreenSize() {
    let width = window.innerWidth;
    let bodyClass = document.body.className;
    let navLinks = document.querySelector(".nav-links");

    if (width > 1024 && bodyClass !== "pc-view") {
        document.body.className = "pc-view";
        console.log("PC View Loaded");
    } else if (width > 768 && width <= 1024 && bodyClass !== "tablet-view") {
        document.body.className = "tablet-view";
        console.log("Tablet View Loaded");
    } else if (width <= 768 && bodyClass !== "mobile-view") {
        document.body.className = "mobile-view";
        console.log("Mobile View Loaded");
    }

    // Close the mobile menu when resizing beyond mobile size
    if (width > 768 && navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        console.log("Menu Closed on Resize");
    }
}

// Run on page load
detectScreenSize();

// Run when window is resized (debounced)
window.addEventListener("resize", debounce(detectScreenSize));

// Hamburger Menu Toggle Function
function toggleMenu() {
    let navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        console.log("Menu Opened");
    } else {
        console.log("Menu Closed");
    }
}
