$(document).ready(function() {

    $('.nav > ul > li').mouseover(function(){
        $('.submenu, .background').stop().slideDown(200);
    });
    $('.nav > ul > li').mouseout(function(){
        $('.submenu, .background').stop().slideUp(200);
    });
});
