$(window).scroll(function () {
    if ($("#menu").offset().top > 56) {
        $("#menu").addClass("bg-trans");
        $("#menu").addClass("navbar-black");
        $("#menu").removeClass("bg-light");
        $("#menu").removeClass("navbar-light");
        $("#logo-img").addClass("bg-trans");
        $("#logo-mexicana").addClass("invisible");
        $("#logo-mexicana-color").removeClass("invisible");
        $("#logo-mexicana-color").addClass("visible");

        $("#buscar-blanco").addClass("invisible");
        $("#buscar-color").removeClass("invisible");
        $("#buscar-color").addClass("visible");
    } else {
        $("#menu").removeClass("navbar-black");
        $("#menu").removeClass("bg-trans");
        $("#menu").addClass("navbar-light");
        $("#menu").addClass("bg-ligth");
        $("#logo-img").removeClass("bg-trans");
        $("#logo-mexicana").removeClass("invisible");
        $("#logo-mexicana-color").removeClass("visible");
        $("#logo-mexicana-color").addClass("invisible");

        $("#buscar-blanco").removeClass("invisible");
        $("#buscar-color").removeClass("visible");
        $("#buscar-color").addClass("invisible");
    }
});