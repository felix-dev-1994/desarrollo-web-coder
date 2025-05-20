
    const toggleButton = document.getElementById("menu-toggle");
    const menu = document.getElementById("navbarMenu");

    toggleButton.addEventListener("click", () => {
        menu.classList.toggle("d-none");
        menu.classList.toggle("d-flex");
        menu.classList.toggle("flex-column");
});
