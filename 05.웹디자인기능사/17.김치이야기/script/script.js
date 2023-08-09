
$(function(){

    $('.nav > ul > li').hover(
        function(){
            $(this).find('.submenu').stop().slideDown();
        }, 
        function(){
            $(this).find('.submenu').stop().slideUp();
        }
    );

    $('.sliderWrap').append( $('.sliderImg').first().clone(true));
    let currnetIndex = 0;
    setInterval(function(){
        currnetIndex++;
        $('.sliderWrap').animate({marginLeft: -(currnetIndex * 100) + "%" }, 600);
        if (currnetIndex == 3) {
            setTimeout(function(){
                $('.sliderWrap').animate({marginLeft: 0}, 0);
                currnetIndex = 0;
            });
        }
    }, 3000);


    $('.popupLayer').click(function(){
        $('#popup').show();
    });
    
    $('.close').click(function(){
        $('#popup').hide();
    });
});