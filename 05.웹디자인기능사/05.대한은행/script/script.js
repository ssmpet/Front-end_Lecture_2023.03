$(function(){


    $('nav>ul>li').mouseover(function(){
        $('ul.submenu').stop().slideDown(400);
    });
    $('nav>ul>li').mouseleave(function(){
        $('ul.submenu').stop().slideUp(400);
    });

    setInterval(function(){
        $('.sliderList').animate({'margin-left':'-100%'}, function(){
            $('.sliderImg:first').appendTo('.sliderList');
            $('.sliderList').css({'margin-left':'0%'});
        });
    }, 3000);

    $('h2').on('click', function(){
        $(this).addClass('on')
            .siblings('h2').removeClass('on');
    }); 

    
    $('.layerPopup').on('click', function(){
        $('#popup').fadeIn();
    });
    $('.close').on('click', function(){
        $('#popup').fadeOut();
    });
});