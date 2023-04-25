$(function(){
    $('nav>ul>li, .background').mouseover(function(){
        $('.submenu, .background').stop().slideDown();        
    });
    $('nav>ul>li, .background').mouseleave(function(){
        $('.submenu, .background').stop().slideUp();
    });


    $('.sliderImg:gt(0)').hide();

    setInterval(function(){
        $('.sliderImg:first').fadeOut(1500).next().fadeIn(1500);
        $('.sliderImg:first').appendTo('.sliderList');
    }, 3000);

    $('.layerPopup').on('click', function(e){
        e.preventDefault();
        $('#popup').fadeIn();
    });
    $('.close').on('click', function(){
        $('#popup').fadeOut();
    });

});