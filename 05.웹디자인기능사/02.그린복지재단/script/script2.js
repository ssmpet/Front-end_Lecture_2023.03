$(function(){
    $('.nav > ul > li').mouseover(function() {
        $('.nav > ul > li > ul').stop().slideDown(400);
        $('#header').addClass('on');
    });

    $('.nav > ul > li').mouseout(function() {
        $('.nav > ul > li > ul').stop().slideUp(100);
        $('#header').removeClass('on');
    });
});

// window.onload = function() {
//     let navList = document.querySelector('.nav > ul ');
   
//     navList.addEventListener('mouseover', function(){
//         this.querySelectorAll('.submenu').forEach(element => {
//             element.style.height = '165px';
//         });
//     });

//     navList.addEventListener('mouseout', function(){
//         this.querySelectorAll('.submenu').forEach(element => {
//             element.style.height = '0px';
//         });
//     });
// }