$(function(){
    // 메뉴에 오버했을 때 자식 메뉴를 보여줘라!
    $('.nav > ul > li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(200);
    });
    $('.nav > ul > li').mouseout(function(){
        $(this).find('.submenu').stop().slideUp(200);
    });

    let currentIndex = 0;

    $(".sliderWrap").append($('.slider').first().clone(true));

    setInterval(function() {
        currentIndex++;
        $('.sliderWrap').animate({marginTop: -currentIndex * 300 + "px"}, 600);

        if (currentIndex == 3 ){
            setTimeout(function(){
                $('.sliderWrap').animate({marginTop: 0}, 0);
                currentIndex = 0;
            }, 700);
        }
        
    }, 3000);
});
