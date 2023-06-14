$(document).ready(function(){

    $('.mainmenu>li').mouseenter(function(){
        $('.submenu').slideDown(100);
    });
    $('.mainmenu>li').mouseleave(function(){
        $('.submenu').slideUp(100);
    });

    setInterval(function(){

        $('.sliderList').animate({'margin-top':'-300'}, function(){
            $('.sliderImg:first').appendTo('.sliderList')
            $('.sliderList').css({'margin-top':'0'})
        })
    }, 3000);

    $('.layerPopup').on('click', function(e){
        e.preventDefault();
        $('#popup').fadeIn();
    });
    $('.close').on('click', function(){
        $('#popup').fadeOut();
    });
});