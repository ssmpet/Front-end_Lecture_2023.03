$(function(){
    $('.nav > ul > li').mouseover(function() {
        $('.nav > ul > li > ul').stop().slideDown(400);
        
    });

    $('.nav > ul > li').mouseout(function() {
        $('.nav > ul > li > ul').stop().slideUp(400);
    });


    let currentIndex = 0;
    setInterval(function(){
        let nextIndex = ( currentIndex + 1) % 3;

        $('.slider').eq(currentIndex).fadeOut(1200);
        $('.slider').eq(nextIndex).fadeIn(1200);

        currentIndex = nextIndex;
    }, 3000);


    // TAB Menu
    let tabBtn = $('.tab-btn > ul > li');
    let tabCont = $(".tab-cont > div");
    tabCont.hide().eq(0).show();

    tabBtn.click(function(){
        const index = $(this).index();
        
        $(this).addClass("active").siblings().removeClass("active");
        tabCont.eq(index).show().siblings().hide();
    });


    // 팝업
    $('.popup-btn').click(function(){
        $('.popup-view').show();
    });

    $('.popup-close').click(function(){
        $('.popup-view').hide();
    });


});