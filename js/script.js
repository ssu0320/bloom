//  햄버거메뉴 스크립트

$(function(){
    var pull=$('#pull');
        menu=$('nav ul');
        menuHeight=menu.height();   	      
 $(pull).on('click', function(e){
    e.preventDefault();
    menu.slideToggle();   	      	
 });
 $(window).resize(function(){
    var w=$(window).width();
    if(w>600 && menu.is(':hidden'))
        {menu.removeAttr('style');}
 });
 });