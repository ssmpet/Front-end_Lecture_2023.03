$(function(){

    $('.accordion-menu>ul>li').hover(
        function(){
            $(this).find('.submenu').stop().slideDown(500);
    }, 
        function(){
            $(this).find('.submenu').stop().slideUp(500);
    });


    $('.sliderImg:gt(0)').hide();
    setInterval(function(){
        $('.sliderImg:first').fadeOut(1500).next().fadeIn(1500);
        $('.sliderImg:first').appendTo('.sliderList');

    }, 3000);

    $('h2').on('click', function(){
        $(this).addClass('on').siblings('h2').removeClass('on');
    });

    $('.layerPopup').on('click', function(){
        $('#popup').fadeIn();
    });

    $('.close').on('click', function(){
        $('#popup').fadeOut();
    });
})