$(function(){
    $('.nav > ul > li').mouseover(function() {
        $('.nav > ul > li > ul').stop().slideDown(400);
        
    });

    $('.nav > ul > li').mouseout(function() {
        $('.nav > ul > li > ul').stop().slideUp(400);
    });


    let currentIndex = 0;
    setInterval(function(){
        let nextIndex = ( currentIndex + 1) % 3;

        $('.slider').eq(currentIndex).fadeOut(1200);
        $('.slider').eq(nextIndex).fadeIn(1200);

        currentIndex = nextIndex;
    }, 3000);



});