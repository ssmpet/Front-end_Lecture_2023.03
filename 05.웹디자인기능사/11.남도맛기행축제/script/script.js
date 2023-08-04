$(function(){
    $('.nav > ul > li').hover( 
        function(){
            $(this).find('.submenu').stop().fadeIn(400);
        },
        function(){
            $(this).find('.submenu').stop().fadeOut(400);
        }
    );
});