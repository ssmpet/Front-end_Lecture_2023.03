$(function(){
    $('.nav > ul > li').hover(
        function(){
            $(this).find('.submenu').stop().slideDown(400);
        } , 
        function(){
            $(this).find('.submenu').stop().slideUp(400);
         }
    );
});