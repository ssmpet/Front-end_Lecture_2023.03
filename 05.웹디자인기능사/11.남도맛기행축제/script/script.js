$(function(){
    $('.nav > ul > li').mouseenter(function(){
        $(thie).find('.submenu').stop().slideDown(400);
    });

    $('.nav > ul > li').mouseleave(function(){
        $(thie).find('.submenu').stop().slideUp(100);
    });
});