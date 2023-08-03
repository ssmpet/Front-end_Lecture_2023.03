$(function(){
    $('.nav > ul > li').hover(function() {
        $(this).find('.submenu').stop().show();
    },
     function() {
        $(this).find('.submenu').stop().hide();
    });
});