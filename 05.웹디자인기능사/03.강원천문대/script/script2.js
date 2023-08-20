$(function(){

    $('.nav > ul > li').hover(function(){
        $(this).find('.submenu').stop().slideDown();
    },
    
    function(){
        $(this).find('.submenu').stop().slideUp();
    });


    let conTitle = $('.con_title > ul > li');
    let conCon = $('.con_con > div');

    conTitle.click(function(){
        let index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        conCon.eq(index).show().siblings().hide();

    });

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