$(function(){
    $('.nav > ul > li').mouseover(function(){
        $('.nav > ul > li > ul, .background').stop().slideDown();
    });

    $('.nav > ul > li').mouseout(function(){
        $('.nav > ul > li > ul, .background').stop().slideUp();
    });
});