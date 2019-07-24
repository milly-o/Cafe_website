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
    $('.food-menu-tab-content > div').hide();
 
    $('.food-menu-tab-nav a').click(function () {
        $('.food-menu-tab-content > div').hide().filter(this.hash).fadeIn();
 
        $('.food-menu-tab-nav a').removeClass('active');
        $(this).addClass('active');
 
        return false;
    }).filter(':eq(0)').click();
});

jQuery(function($){
    $('.drink-menu-tab-content > div').hide();
 
    $('.drink-menu-tab-nav a').click(function () {
        $('.drink-menu-tab-content > div').hide().filter(this.hash).fadeIn();
 
        $('.drink-menu-tab-nav a').removeClass('active');
        $(this).addClass('active');
 
        return false;
    }).filter(':eq(0)').click();
});



//明朝体フォント adobe fonts
(function(d) {
var config = {
  kitId: 'pwl1xes',
  scriptTimeout: 3000,
  async: true
},
h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);
