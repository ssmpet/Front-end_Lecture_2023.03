// $(function(){
//     // 메뉴에 오버했을 때 자식 메뉴를 보여줘라!
//     $('.nav > ul > li').mouseover(function(){
//         $(this).find('.submenu').stop().slideDown(200);
//     });
//     $('.nav > ul > li').mouseout(function(){
//         $(this).find('.submenu').stop().slideUp(200);
//     });
// });

window.onload = function(){
    let navList = document.querySelectorAll('.nav > ul > li');
    navList.forEach(function(navItem){
        navItem.addEventListener("mouseover", function(){
            this.querySelector('.submenu').style.height="165px";
        });
    });
    navList.forEach(function(navItem){
        navItem.addEventListener("mouseout", function(){
            this.querySelector('.submenu').style.height="0px";
        });
    });
}
