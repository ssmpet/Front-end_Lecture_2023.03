$(function(){

    $('.nav > ul > li').mouseover(function(){
        $('.submenu').stop().slideDown(400);
    });
    $('.nav > ul > li').mouseout(function(){
        $('.submenu').stop().slideUp(400);
    });
});