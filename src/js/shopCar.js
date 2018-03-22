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

//计算总量 总价
$(function(){
    //minus
    var listArr=$(".shopCar_list").children("li").toArray();
    var totalArr=$(".product_all").children("p").children("span").toArray();
    console.log($(".product_all").children("p").children("span").toArray());
    $.each(listArr,function(k,v){
        //减少
        $(v).children(".product_count").children().children().eq(0).click(function(){
            var count=$(this).parent().children(".count").html();
            if(count<=1){
                count=1;
                $(this).parent().children(".count_li li:first").css({"background":"#cecece"});
            }else{
                count--;
                $(this).parent().children(".count_li li:first").css({"background":"#00539c"});
            }
            $(this).parent().children(".count").html(count);
            var price=$(this).parent().parent().prev().children("h3").children("span").html();
            var total=count*price;
            $(this).parent().parent().next().children("p").children("span").html(total);  

            var span_price=$(v).children(".product_all").children().children("span").html();
            
            var totalAll=0;
            if($(v).children(".product_num").children(".checkfu_span").children("i").attr("class")=="iconfont icon-checked"){
                 totalAll=parseInt(totalAll+span_price);
            }
            $(v).parent().parent().children(".shopCar_footer").children(".shopCar_order").children("h5").children().eq(1).children("i").text(totalAll);
        });

        $(v).children(".product_remove").children().click(function(){
            $(v).remove();
        });

        $(v).parent().parent().children(".checked").children().children().eq(2).click(function(){
            if($(v).children(".product_num").children().eq(0).children().attr("class")=="iconfont icon-checked"){
                $(v).remove();
            }
        });
        
       $(v).children(".product_num").children().eq(0).children().click(function(){
            if($(this).attr("class")=="iconfont icon-checked"){
               $(this).parent().parent().parent().children(".product_all").children("p").children("span").html();
            }
       });
    });

    //add
    $.each(listArr,function(k,v){
        $(v).children(".product_count").children().children().eq(2).click(function(){
            var count=$(this).parent().children(".count").html();
            count++;
            var price=$(this).parent().parent().prev().children("h3").children("span").html();
            var total=count*price;
            $(this).parent().parent().next().children("p").children("span").html(total);
            $(this).parent().children(".count").html(count);

            var span_price=$(v).children(".product_all").children().children("span").html();
            
            var totalAll=0;
            if($(v).children(".product_num").children(".checkfu_span").children("i").attr("class")=="iconfont icon-checked"){
                 totalAll=parseInt(totalAll+span_price);
            }
             $(v).parent().parent().children(".shopCar_footer").children(".shopCar_order").children("h5").children().eq(1).children("i").text(totalAll);
        });
    });
});

//全删
$(function(){
   $(".checked").children().children().eq(2).click(function(){
       if($(".checkfu_span i").attr("class")=="iconfont icon-checked"){
        $(this).parent().children(".shopCar_list").children().remove();
       }
   });
});
//全选

$(function(){
     $(".checkfu_span i").click(function(){
        if($(this).attr("class")=="iconfont icon-fuxuankuang"){
            $(this).attr({
                "class":"iconfont icon-checked"
            });
        }
        else{
            $(this).attr({
                "class":"iconfont icon-fuxuankuang"
            });
        }
    });
});

//响应
$(function(){
    $(".checked_btn").children("a").children("i").click(function(){
        if($(this).attr("class")=="iconfont icon-check"){
            $(this).attr({
                "class":"iconfont icon-xuanzhong"
            });
            $(".checkfu_span i").attr({
                "class":"iconfont icon-checked" 
            });
        }
        else{
            $(this).attr({
                "class":"iconfont icon-check"
            });
            $(".checkfu_span i").attr({
                "class":"iconfont icon-fuxuankuang" 
            });
        }
    });
});

$(function(){
   if($(".checkfu_span i").attr("class")=="iconfont icon-fuxuankuang"){
        $(".checked_btn").children("a").children("i").attr({
                "class":"iconfont icon-check"
        });
   }else{

        $(".checked_btn").children("a").children("i").attr({
                "class":"iconfont icon-xunzhong"
        });
   }
});

$(function(){
    $("#pay_for").mouseover(function(){
       $("#pay_for").css({background:"#337ab7"});
    });
    $("#go_shop").mouseover(function(){
      $("#go_shop").css({border:"2px solid #337ab7"});
    });
    $("#pay_for").mouseout(function(){
       $("#pay_for").css({background:"#00559a"});
    });
    $("#go_shop").mouseout(function(){
      $("#go_shop").css({border:"2px solid #00559a"});
    });
});