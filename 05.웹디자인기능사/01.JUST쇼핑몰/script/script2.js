// $(function(){
//     $('.nav > ul > li').mouseover(function() {
//         $('.nav > ul > li > ul').stop().slideDown(200);
        
//     });

//     $('.nav > ul > li').mouseout(function() {
//         $('.nav > ul > li > ul').stop().slideUp(200);
//     });
// });

window.onload = function() {
    let navList = document.querySelector('.nav > ul ');
   
    navList.addEventListener('mouseover', function(){
        this.querySelectorAll('.submenu').forEach(element => {
            element.style.height = '165px';
        });
    });

    navList.addEventListener('mouseout', function(){
        this.querySelectorAll('.submenu').forEach(element => {
            element.style.height = '0px';
        });
    });
}