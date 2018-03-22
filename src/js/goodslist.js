//nav 
//喜欢的队伍效果
$(function(){
$('#select').parent().mouseenter(function(){
    $(this).parent().find("#select_menu").stop(true).slideDown();
});
$('#select').parent().mouseleave(function(){
    $(this).parent().find("#select_menu").stop(true).slideUp();
});
//其他共同的效果

    var oArr=$('.list_menu').children('a').toArray();
    // console.log(oArr);
    $.each(oArr,function(k,v){
    // var width=$(v).parent().find(".nav_list_pub").width();
    var kuan=(($(v).width())/2+34);
    var index=k+1;
    // console.log(index);
    var left=(kuan*index)+300;
     $(v).parent().mouseenter(function(){
        $(this).parent().find(".nav_list_pub").css({position:"absolute",left:left}).stop(true).slideDown();
     });
     $(v).parent().mouseleave(function(){
       
       $(this).parent().find(".nav_list_pub").css({position:"absolute",left:left}).stop(true).slideUp();
     });
  });
});

//商品list
$(function(){
	$(".select_list").children("li:has(ul)").addClass("del").click(function(){
	   $(this).toggleClass("add").children("ul").slideToggle();
	});
    $("li").click(function(ev){
       ev.stopPropagation();
    });
});

//下拉菜单
$(function(){
	$(".new_select").click(function(){
	   $("#new_product").toggle();
	});
	$(".number_select").click(function(){
	   $("#show_product").toggle();
	});
});
