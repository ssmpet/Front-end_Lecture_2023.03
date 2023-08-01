$(function(){
    $('.nav > ul > li').mouseover(function() {
        $('.nav > ul > li > ul').stop().slideDown(400);
        
    });

    $('.nav > ul > li').mouseout(function() {
        $('.nav > ul > li > ul').stop().slideUp(400);
    });
});

// window.onload = function() {
//     let navList = document.querySelector('.nav > ul ');
   
//     navList.addEventListener('mouseover', function(){
//         this.querySelectorAll('.submenu').forEach(element => {
//             element.style.height = '16p5x';
//         });
//     });

//     navList.addEventListener('mouseout', function(){
//         this.querySelectorAll('.submenu').forEach(element => {
//             element.style.height = '0px';
//         });
//     });
// }