
/* =====================================
   RAUDDI MOTORS - JAVASCRIPT
===================================== */

// 1. CARGA DE LA PÁGINA

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hidden");
    }, 700);
});


// 2. HEADER DINÁMICO AL DESPLAZARSE

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


// 3. MENÚ PARA DISPOSITIVOS MÓVILES

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
});


// Cerrar menú al seleccionar una sección

document.querySelectorAll(".navigation a").forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});


// 4. FILTRAR VEHÍCULOS POR MARCA

const filterButtons = document.querySelectorAll(".filter-btn");
const vehicleCards = document.querySelectorAll(".vehicle-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Activar botón seleccionado

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const selectedBrand = button.dataset.filter;

        // Mostrar vehículos según su marca

        vehicleCards.forEach(card => {

            const cardBrand = card.dataset.brand;

            if (selectedBrand === "todos" ||
                selectedBrand === cardBrand) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

});


// 5. ANIMACIONES AL DESPLAZARSE

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

document.querySelectorAll(".reveal").forEach(element => {
    observer.observe(element);
});


// 6. FORMULARIO DE CONTACTO

const contactForm = document.getElementById("contactForm");
const formNotice = document.getElementById("formNotice");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const vehicle = document.getElementById("vehicle").value;

    if (!name || !email || !vehicle) {

        formNotice.textContent =
            "Por favor, completa los campos obligatorios.";

        return;
    }

    formNotice.textContent =
        "¡Gracias, " + name +
        "! El formulario funciona en modo demostración. " +
        "Para recibir solicitudes reales se necesita conectar un servicio de envío.";

    contactForm.reset();

});


// 7. AÑO AUTOMÁTICO EN CONSOLA

console.log("RAUDDI MOTORS");
console.log("Sitio web cargado correctamente.");
console.log("Desarrollado con HTML5, CSS3 y JavaScript.");
