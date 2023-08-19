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
        $('.sliderImg').eq(currentIndex).fadeOut(1200);
        $('.sliderImg').eq(nextIndex).fadeIn(1200);
        currentIndex = nextIndex;
    }, 3000);

    let conBtn = $('.con_btn > div');
    let conCon = $('.con_con > div');

    conBtn.click(function(){
        let n = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        conCon.eq(n).show().siblings().hide(); 

    });

    $('.popupLayer').click(function(){
        $('#popup').show();
    }); 

    $('.close').click(function(){
        $('#popup').hide();
    });
});