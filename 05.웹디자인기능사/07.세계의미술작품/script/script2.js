
window.onload = function(){
    let navList = document.querySelectorAll('.nav > ul > li');
    navList.forEach(function(navItem){
        navItem.addEventListener('mouseover', function(){
            this.querySelector('.submenu').style.height = '165px';
        });
        navItem.addEventListener('mouseout', function(){
            this.querySelector('.submenu').style.height = '0px';
        });

    });

};