$(function(){
    $('.nav > ul > li').mouseover(function() {
        $('.nav > ul > li > ul, .background').stop().slideDown(400);
        
    });

    $('.nav > ul > li').mouseout(function() {
        $('.nav > ul > li > ul, .background').stop().slideUp(100);
        
    });

    let currentIndex = 0;
    
    $('.sliderWrap').append($('.slider').first().clone(true)); // 첫번째 이미지 복사

    setInterval(function(){
        currentIndex++;
        // $('.sliderWrap').animate({"margin-left" : -currnetIndex * 100 + '%'}, 600);
        $(".sliderWrap").animate({marginLeft : -currentIndex * 100 + "%"}, 600);
       
        if(currentIndex == 3) {
            setTimeout(function(){
                $(".sliderWrap").animate({marginLeft: 0}, 0);
                currentIndex = 0;
            }, 700)
        }
    }, 3000);
});
