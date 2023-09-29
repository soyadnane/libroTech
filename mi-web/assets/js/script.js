   // Espera a que el documento esté listo
   $(document).ready(function () {
    // Muestra u oculta el botón según la posición del scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scrollToTopBtn').fadeIn();
        } else {
            $('#scrollToTopBtn').fadeOut();
        }
    });

    // Controla el desplazamiento hacia arriba al hacer clic en el botón
    $('#scrollToTopBtn').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});