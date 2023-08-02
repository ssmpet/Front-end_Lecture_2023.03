$(function(){
    $('.nav > ul > li').mouseover(function(){
        $('.nav > ul > li > ul').stop().slideDown();
    });

    $('.nav > ul > li').mouseout(function(){
        $('.nav > ul > li > ul').stop().slideUp();
    });
});