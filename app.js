const enlaceIniciarSesion = document.getElementById("enlace-iniciar-sesion");
const formularioInicioSesion = document.getElementById("formulario-inicio-sesion");

enlaceIniciarSesion.addEventListener("click", function(event) {
    event.preventDefault(); // Previene el comportamiento predeterminado del enlace

    // Cambia el estado de visibilidad del formulario de inicio de sesión
    if (formularioInicioSesion.style.display === "none" || formularioInicioSesion.style.display === "") {
        formularioInicioSesion.style.display = "block";
    } else {
        formularioInicioSesion.style.display = "none";
    }
});


document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todas las imágenes del carrusel y agrega un event listener para el clic
    var carouselImages = document.querySelectorAll('.carousel-item img');
    carouselImages.forEach(function(image) {
        image.addEventListener('click', function() {
            var subpage = image.getAttribute('data-subpage');
            window.location.href = subpage + '.html';
        });
    });

    // Selecciona todas las tarjetas y agrega un event listener para el clic
    var cardImages = document.querySelectorAll('.card img');
    cardImages.forEach(function(image) {
        image.addEventListener('click', function() {
            var subpage = image.getAttribute('data-subpage');
            window.location.href = subpage + '.html';
        });
    });

});

