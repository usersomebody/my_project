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

//进入效果
$(function(){
    //打折
    $("#user_favour").mouseover(function(){
        $(this).css({background:"white",color:"#0073d1"});
    });

    $("#user_favour").mouseout(function(){
        $(this).css({background:"#949da9",color:"white"});
    });
    //结算
    $("#settle_all").mouseover(function(){
        $(this).css({background:"#0073d1"});
    });
    $("#settle_all").mouseout(function(){
        $(this).css({background:"#00559a"});
    });
    //添加地址
    
    $("#add_address").mouseover(function(){
        $(this).css({background:"#0073d1"});
    });
    $("#add_address").mouseout(function(){
        $(this).css({background:"#00559a"});
    });
})

