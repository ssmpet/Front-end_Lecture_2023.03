$(document).ready(function(){

    $('nav>ul>li').mouseenter(function(){
        $('.submenu, .background').stop().slideDown();
    });
    $('nav>ul>li').mouseleave(function(){
        $('.submenu, .background').stop().slideUp();
    })

    setInterval(function(){
        $('.sliderList').animate({'margin-left':'-100%'}, function(){
            $('.sliderImg:first').appendTo('.sliderList')
            $('.sliderList').css({'margin-left':'0%'})
        });

    }, 3000);

    $('.layerPopup').on('click', function(e){
        e.preventDefault();
        $('#popup').fadeIn();
    });
    $('.close').on('click', function(){
        $('#popup').fadeOut();
    });

});