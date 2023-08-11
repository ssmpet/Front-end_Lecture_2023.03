$(function(){
    
    $('.nav > ul > li').hover(
        
        function(){
            $(this).find('.submenu').stop().fadeIn(100);
        }, 
        function(){
            $(this).find('.submenu').stop().fadeOut(100);
        }
    );

    $('.sliderWrap').append($('.sliderImg').first().clone(true));
    let  currentIndex = 0;
    setInterval(function(){
        currentIndex++;
        $('.sliderWrap').animate({marginTop: -(currentIndex * 800) + "px"},  700);

        if(currentIndex ==3)  {
            $('.sliderWrap').animate({marginTop:0}, 0);
            currentIndex = 0;
        }
    }, 3000);


    $('.popupLayer').click(function(){
        $('#popup').show();
    });
    $('.close').click(function(){
        $('#popup').hide();
    });
});

