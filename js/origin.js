//スマホメニュー
//     jQuery(function($) {
//     $('.mobile-menu-block-menu').on('click', function() {
//         $('.menu__line').toggleClass('active');
//         $('.gnav').fadeToggle();
//     });
//     $('.gnav__menu a[href]').on('click', function(event) {
//         $('.menu__line').toggleClass('active');
//         $('.gnav').fadeToggle();
//     });
// });
//PCメニュー
jQuery(function() {
    var $win = $(window),
        $header = $('.pc-gmenu-container-fluid'),
        animationClass = 'is-animation';

    $win.on('load scroll', function() {
        var value = $(this).scrollTop();
        if (value > 100) {
            $header.addClass(animationClass);
        } else {
            $header.removeClass(animationClass);
        }
    });
});
//ページ内リンク スムーススクロール
jQuery(function($) {
    $('a[href^="#"]' + 'a:not([href^="#modal"])').click(function(){
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });
});