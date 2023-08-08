$(function(){
    $('.nav > ul > li').hover(
        function(){
            $('.nav > ul > li > ul').stop().fadeIn();
        }, 
        function(){
            $('.nav > ul > li > ul').stop().fadeOut();
        }
    );

    let currentIndex = 0;

    setInterval(function(){
        let nextIndex = (currentIndex + 1) % 3;
        $('.sliderImg').eq(currentIndex).fadeOut(1200);
        $('.sliderImg').eq(nextIndex).fadeIn(1200);
        currentIndex = nextIndex;
    }, 3000);

    $('.popupLayer').click(function(){
        $('#popup').show();
    });

    $('.close').click(function(){
        $('#popup').hide();
    });
});