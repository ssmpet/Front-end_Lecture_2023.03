$(function() {
    $('.nav > ul > li').mouseover(function(){
        $('.nav > ul > li > ul').stop().fadeIn(900);
        // $('#header').addClass('on');
    });
    $('.nav > ul > li').mouseout(function(){
        $('.nav > ul > li > ul').stop().fadeOut(100);
        // $('#header').removeClass('on');
    });
});