$(document).ready(function () {
    // Oculta todos los divs de páginas, excepto el de "index"
    $("#biblioteca, #propuesta, #reserva, #login, #register").hide();

    // Función para mostrar una página específica
    function mostrarPagina(targetId) {
        // Oculta todos los divs de páginas
        $("#index, #biblioteca, #propuesta, #reserva, #login, #register").hide();

        // Mostrar div correspondiente
        $("#" + targetId).show();
    }

    // Escucha el click en los enlaces con las clases proporcionadas aqui abajo.
    $(".nav-link, .sign-link, .biblioteca-link, .propuesta-link, .reserva-link, .login-link, .register-link").on("click", function (event) {
        event.preventDefault(); // Evita la navegación real

        // Obtiene el ID del div correspondiente al enlace
        var targetId = $(this).attr("href").substring(1);

        // Muestra la página correspondiente utilizando la función mostrarPagina
        mostrarPagina(targetId);
    });
});