$(function() {

    $('.nav > ul > li').mouseover(function() {
        $('.nav > ul > li > ul, .background').stop().slideDown(500);

    });

    $('.nav > ul > li').mouseout(function() {
        $('.nav > ul > li > ul, .background').stop().slideUp(200);

    });
});