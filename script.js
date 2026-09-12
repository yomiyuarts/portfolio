document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Setup the Intersection Observer for fade-in animations
    const observerOptions = {
        root: null, // uses viewport
        threshold: 0.1 // triggers when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Adds your fade class
                observer.unobserve(entry.target); // Stops watching once faded in
            }
        });
    }, observerOptions);

    // 2. Observe your fade elements
    const fadeElements = document.querySelectorAll('.fade-in'); // Adjust selector as needed
    fadeElements.forEach(el => observer.observe(el));
  
    // 3. Smooth Scroll Function
    function addSmoothScroll(buttonId, targetId) {
        const button = document.getElementById(buttonId);
        const target = document.getElementById(targetId);

        if (!button || !target) return;

        button.addEventListener("click", (e) => {
            e.preventDefault(); // Prevents default jump anchor behavior if using <a> tags
            
            target.scrollIntoView({
                behavior: "smooth",
                block: "center" // Scrolls until target is centered in viewport
            });
        });
    }

    // 4. Initialize the smooth scroll
    addSmoothScroll("portfolio", "resume");

    const hamburger = document.getElementById("hamburger");
const navbarNav = document.getElementById("navbarNav");

if (hamburger && navbarNav) {
    hamburger.addEventListener("click", function () {
        navbarNav.classList.toggle("active");
    });

}
});
