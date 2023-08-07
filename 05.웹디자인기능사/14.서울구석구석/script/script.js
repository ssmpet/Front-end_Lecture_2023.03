$(function(){

    $('.nav > ul > li').hover(
        function(){

            $(this).find('.submenu').stop().slideDown();
        },
        function(){
            $(this).find('.submenu').stop().slideUp();
        }
    );

    let currentIndex = 0;
    $('.sliderList').append($('.sliderImg').first().clone(true));
    setInterval(function(){
        currentIndex++;
        $('.sliderList').animate({marginLeft: -(currentIndex * 100)+ "%"}, 600);
        if (currentIndex == 3) {
            setTimeout(function(){

                $('.sliderList').animate({marginLeft: 0}, 0);
                currentIndex = 0;
            });
        }
    }, 3000);

    $('.popupLayer').click(function() {
        $('#popup').show();
    });

    $('.close').click(function() {
        $('#popup').hide();
    });
});