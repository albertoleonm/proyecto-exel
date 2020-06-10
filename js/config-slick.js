$(document).ready(function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        intinite: true,
        arrows: true,
        dots: true
    });
});
$(document).ready(function () {
    $('.slider-marcas').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        intinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});