/* Scroll Animation Fix for Mobile */
function revealSections() {
    document.querySelectorAll("section").forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            sec.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);
