$(window).scroll(function () {
    if ($("#menu").offset().top > 56) {
        $("#menu").addClass("bg-trans");
        $("#menu").addClass("navbar-black");
        $("#menu").removeClass("bg-light");
        $("#menu").removeClass("navbar-light");
        $("#logo-img").addClass("bg-trans");
    } else {
        $("#menu").removeClass("navbar-black");
        $("#menu").removeClass("bg-trans");
        $("#menu").addClass("bg-ligth");
        $("#menu").addClass("navbar-light");
        $("#logo-img").removeClass("bg-trans");
    }
});