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
// jQuery(function($) {
//     $('a[href^="#"]' + 'a:not([href^="#modal"])').click(function(){
//         var speed = 400;
//         var href = $(this).attr("href");
//         var target = $(href == "#" || href == "" ? 'html' : href);
//         var position = target.offset().top;
//         $('body,html').animate({ scrollTop: position }, speed, 'swing');
//         return false;
//     });
// });

$(function(){
  $('a[href^=#].scroll').click(function() {
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});


//タブメニュー
jQuery(function($){
    $('.menu-tab-content > div').hide();
 
    $('.menu-tab-nav a').click(function () {
        $('.menu-tab-content > div').hide().filter(this.hash).fadeIn();
 
        $('.menu-tab-nav a').removeClass('active');
        $(this).addClass('active');
 
        return false;
    }).filter(':eq(0)').click();
});


