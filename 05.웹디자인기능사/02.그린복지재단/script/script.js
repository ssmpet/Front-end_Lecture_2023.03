$(function() {

    // 그룹 메뉴
    $('nav>ul>li').mouseover(function(){
        $('.submenu, .background').stop().slideDown();
    });
    $('nav>ul>li').mouseleave(function(){
        $('.submenu, .background').stop().slideUp();
    });

    // 좌우슬라이딩
    // let x = 0;
    setInterval (function(){
        // if (x < 2)  x++;
        // else x = 0;

        // let sliderPosition = x * (-300) + "px";
        // $('.sliderList').animate({top:sliderPosition}, 400);

        $('.sliderList').animate({'margin-left':'-100%'}, function(){
            $('.sliderImg:first').appendTo('.sliderList')
            $('.sliderList').css({'margin-left':'0%'})
        })
    }, 3000);

   
    // 레이어 팝업
    $('.layerPopup').on('click', function(e){
                            e.preventDefault();
                            $('#popup').fadeIn();
    });
    $('.close').on('click', function(){
                            $('#popup').fadeOut();
    });

});