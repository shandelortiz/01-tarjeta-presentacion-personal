const btnDarkMode = document.getElementById("darkModeBtn");
const body = document.body;

btnDarkMode.addEventListener("click", () => {
    body.classList.toggle('dark-mode');

    // Cambiar el texto del boton dependiendo del modo
    if (body.classList.contains('dark-mode')) {
        btnDarkMode.textContent = 'Cambiar a modo claro';
    } else {
        btnDarkMode.textContent = 'Cambiar a modo oscuro';
    }
});