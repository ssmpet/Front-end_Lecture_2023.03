$(function(){

    $('.nav > ul > li').hover( 
        function(){
            $('.nav > ul > li > ul, .background').stop().slideDown(400);
        }, 
        function(){
            $('.nav > ul > li > ul, .background').stop().slideUp(400);
        }
    );

    $('.sliderWrap').append($('.sliderImg').first().clone(true));
    let currentIndex = 0;
    setInterval(function(){
        currentIndex++;
        $('.sliderWrap').animate({marginTop: -(currentIndex * 300) + "px"}, 600);

        if ( currentIndex == 3 ){
            $('.sliderWrap').animate({marginTop: 0}, 0);
            currentIndex = 0;
        }
    }, 3000);

    $('.layerPopup').click(function(){
        $('#popup').show();
    });

    $('.close').click(function(){
        $('#popup').hide();
    });
});