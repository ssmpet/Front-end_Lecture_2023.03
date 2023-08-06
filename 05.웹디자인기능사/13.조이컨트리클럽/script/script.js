$(function(){

    $('.nav > ul > li').hover(
        function(){
            $(this).find('.submenu').stop().slideDown();
        }, 
        function() {
            $(this).find('.submenu').stop().slideUp();
        }
    );

    setInterval(function(){

        $('.sliderWrap').animate({marginTop : '-400'}, function(){
            $('.sliderImg:first').appendTo('.sliderWrap');
            $('.sliderWrap').css({marginTop : '0'});
        })
    }, 3000);

    let tabBtn = $('.tab-btn > ul > li');
    let tabCont = $('.tab-cont > div');

    tabCont.hide().eq(0).show();
    tabBtn.click(function(){
        const index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        tabCont.eq(index).show().siblings().hide();
    });

    $('.popupLayer').click(function(){
        $('#popup').show();
    });

    $('.close').click(function(){
        $('#popup').hide();
    });
});