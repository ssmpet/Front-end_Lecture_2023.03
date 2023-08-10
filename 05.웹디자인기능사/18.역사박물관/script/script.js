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
    let  currentIndex = 0;
    setInterval(function(){
        currentIndex++;

        $('.sliderWrap').animate({marginTop: -(currentIndex * 700) + "px"}, 600);
        
        if(currentIndex==3) {
            setTimeout(function(){
                $('.sliderWrap').animate({marginTop:0}, 0);
                currentIndex=0;
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