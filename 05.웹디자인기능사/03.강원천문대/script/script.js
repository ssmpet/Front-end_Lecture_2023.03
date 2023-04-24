$(function(){

    // 그룹 메뉴
    $('nav>ul>li').mouseover(function(){
        $('.submenu').slideDown(100);
    });
    $('nav>ul>li').mouseleave(function(){
        $('.submenu').slideUp(100)
    });

    // slider 메뉴
    $('.sliderImg:gt(0)').hide();
    
    setInterval(function(){

        
        $('.sliderImg:first').fadeOut(1500).next().fadeIn(1500);
        $('.sliderImg:first').appendTo('.sliderList');
    
    }, 3000);

    // 텝메뉴
    $('h2').on('click', function(){
        $(this).addClass('on')
        .siblings('h2').removeClass('on');
    });

    // 레이어 팝업
    $('.layerPopup').on('click', function(){
        $('#popup').fadeIn();
    });

    $('.close').on('click', function(){
        $('#popup').fadeOut();
    });

});