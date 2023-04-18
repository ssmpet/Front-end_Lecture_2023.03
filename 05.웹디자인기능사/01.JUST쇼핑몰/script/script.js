$(function() {

    // 그룹 메뉴
    $('nav>ul>li').mouseenter(function(){
        $('ul.submenu').stop().slideDown(400);
    });
    $('nav>ul>li').mouseleave(function(){
        $('ul.submenu').stop().slideUp(400);
    });

    // 위아래슬라이딩
    // let x = 0;
    setInterval (function(){
        // if (x < 2)  x++;
        // else x = 0;

        // let sliderPosition = x * (-300) + "px";
        // $('.sliderList').animate({top:sliderPosition}, 400);

        $('.sliderList').animate({'margin-top':'-300'}, function(){
            $('.sliderImg:first').appendTo('.sliderList')
            $('.sliderList').css({'margin-top':'0'})
        })
    }, 3000);

    // 탭메뉴
    $('h2').on('click', function(){
        $(this).addClass('on')
        .siblings('h2').removeClass('on');
    });

    // 레이어 팝업
    $('.layerPopup').on('click', function(e){
                            e.preventDefault();
                            $('#popup').fadeIn();
    });
    $('.close').on('click', function(){
                            $('#popup').fadeOut();
    });

});