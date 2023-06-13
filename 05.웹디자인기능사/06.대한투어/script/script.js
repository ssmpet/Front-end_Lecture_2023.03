$(document).ready(function(){

    $('nav>ul>li, .background').mouseover(function(){
        $('.submenu, .background').stop().slideDown();
    });
    $('nav>ul>li, .background').mouseleave(function(){
        $('.submenu, .background').stop().slideUp();
    });

    setInterval (function(){

        $('.sliderList').animate({'margin-top':'-300'}, function(){
            $('.sliderImg:first').appendTo('.sliderList')
            $('.sliderList').css({'margin-top':'0'})
        })

    }, 3000) ;

    $('.layerPopup').on('click', function(e){
        e.preventDefault();
        $('#popup').fadeIn();
    });
    $('.close').on('click', function(){
        $('#popup').fadeOut();
    });
});