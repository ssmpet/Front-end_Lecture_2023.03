$(function(){
    $('.nav > ul > li').hover(
        function(){
            $(this).find('.submenu').stop().slideDown(400);
        } , 
        function(){
            $(this).find('.submenu').stop().slideUp(400);
         }
    );

    let currentIndex = 0;
    setInterval(function(){
        let nextIndex = (currentIndex + 1) % 3;
        $('.sliderImg').eq(currentIndex).fadeOut(1500);
        $('.sliderImg').eq(nextIndex).fadeIn(1500);
        currentIndex = nextIndex;
    }, 3000);

    $('.con_btn > div').click(function(){
        let n = $(this).index();
        $(this).css('background-color', "#db6666").siblings().css('background-color', "#dfdfdf");
        $('.con_con > div').eq(n).show().siblings().hide(); 

    });
});