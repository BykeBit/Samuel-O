function setFavicon() {
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const favicon = document.querySelector("link[rel='icon']");
    favicon.href = dark ? "img/light-theme.png" : "img/dark-theme.png";}
    setFavicon();
window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", setFavicon);


document.addEventListener("contextmenu", function(e){
    e.preventDefault();
});
document.addEventListener("keydown", function(e) {
    // Ctrl + U
    if (e.ctrlKey && e.key.toLowerCase() === "u") {
        e.preventDefault();
    }
    // Ctrl + Shift + I
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") {
        e.preventDefault();
    }
    // F12
    if (e.key === "F12") {
        e.preventDefault();
    }
    // Ctrl + S (guardar)
    if (e.ctrlKey && e.key.toLowerCase() === "s") {
        e.preventDefault();
    }
});


    window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("contenido").style.display = "block";
      }, 3000); // 3000ms = 3 segundos
    });

    const btn = document.querySelector('.btn-prueba');

btn.addEventListener('click', () => {
    btn.classList.remove('rebote'); // Reinicia la animación
    void btn.offsetWidth; // fuerza el reflow para que se reinicie
    btn.classList.add('rebote'); // agrega la animación
});

document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("toggleBtn");
    const menuIcon = document.getElementById("menuIcon");

    toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("open");

        if (sidebar.classList.contains("open")) {
            menuIcon.src = "icons/close.svg";
            menuIcon.alt = "Cerrar menú";
        } else {
            menuIcon.src = "icons/menu.svg";
            menuIcon.alt = "Abrir menú";
        }
    });
});

document.addEventListener("contextmenu", function(e){
    e.preventDefault();
});
document.addEventListener("keydown", function(e) {
    // Ctrl + U
    if (e.ctrlKey && e.key.toLowerCase() === "u") {
        e.preventDefault();
    }
    // Ctrl + Shift + I
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") {
        e.preventDefault();
    }
    // F12
    if (e.key === "F12") {
        e.preventDefault();
    }
    // Ctrl + S (guardar)
    if (e.ctrlKey && e.key.toLowerCase() === "s") {
        e.preventDefault();
    }
    // Ctrl + P (imprimir)
    if (e.ctrlKey && e.key.toLowerCase() === "p") {
        e.preventDefault();
    }
    // Ctrl + C (copiar)
    if (e.ctrlKey && e.key.toLowerCase() === "c") {
        e.preventDefault();
    }
});

