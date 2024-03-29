//メインスライダー
jQuery(document).ready(function() {
    $('.hero-slider-list').slick({
    autoplay: true,
    autoplaySpeed: 4500,
    speed: 1200,
    dots: false,
    arrows: false,
    centerMode: true,
    centerPadding: '6%',
    focusOnSelect:true,
    pauseOnHover: false,
    pauseOnFocus: false,
        responsive: [{
                breakpoint: 992,
                settings: {
                	centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]    
    });   
});



//クロワッサン スライダー
jQuery(document).ready(function() {
    $('.cro-slider-list').slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        prevArrow: '<img src="images/slider_arrow_left.jpg" class="slide-arrow prev-arrow">',
        nextArrow: '<img src="images/slider_arrow_right.jpg" class="slide-arrow next-arrow">',
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 544,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });
});