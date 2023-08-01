$(function() {

    $('.nav > ul > li').mouseover(function() {
        $('.nav > ul > li > ul').stop().slideDown(500);
        $('#header').addClass('on');
    });

    $('.nav > ul > li').mouseout(function() {
        $('.nav > ul > li > ul').stop().slideUp(200);
        $('#header').removeClass('on');
    });
});