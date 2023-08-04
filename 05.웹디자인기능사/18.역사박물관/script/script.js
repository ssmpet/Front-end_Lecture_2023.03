$(function(){

    let currentIndex = 0;

    $('.sliderWrap').append($('.slider').first().clone(true));

    setInterval(function(){
        currentIndex++;
        $('.sliderWrap').animate({marginTop: -currentIndex*100 + "vh"}, 600);
        if (currentIndex == 3) {
            setTimeout(function(){
                $('.sliderWrap').animate({marginTop: 0}, 0);
                currentIndex = 0;
            }, 700);
        }
    }, 3000);
});