function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill all fields");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}

/* Dark Mode */
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

/* Scroll Animation */
window.addEventListener("scroll", () => {
    document.querySelectorAll("section").forEach(sec => {
        const top = window.scrollY;
        if (top > sec.offsetTop - 400) {
            sec.classList.add("show");
        }
    });
});
