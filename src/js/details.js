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


//放大镜
$(function(){
  var arrImg=$(".section_small").children("li").children("a").children("img").toArray();
  var box=$(".content_section");
  var oMiddleBox=$(".middle_box");
  var oMiddleImg=$("#middle_img");
  var oLargeBox=$(".large_box");
  var oLargeImg=$("#large_img");
  var oShadow=$(".exchange");
  var iPerw=94;
  var ul=$(".section_small");

    $.each(arrImg,function(k,v){
      $(v).click(function(){
        $(this).addClass("active").parent().parent().siblings().find("img").removeClass("active");
        var src=$(this).attr("src");
        $("#middle_img").attr({"src":src});
         $("#large_img").attr({"src":src});
      });

      $(".small_second").click(function(){
         $.each(arrImg,function(k,v){
          if(k>arrImg.length){
            k=arrImg.length;
            $(".section_small").css({"top":-k*iPerw});
          }
         });
      });
      $(".small_first").click(function(){
        $.each(arrImg,function(k,v){
          if(k<=0){
            k=0;
            $(".section_small").css({"top":0});
          }
        });
      });
    });


    //判断边界
    var maxL = 0;
    var maxT = 0;    
    //大图片最大的left和top
    var maxLargeImgL  = 0;
    var maxLargeImgT  = 0;

    //鼠标进去中型盒子

    oMiddleBox.mouseover(function(){
      //显示遮挡层
      oShadow.css({"display":"block"});
      //显示大型盒子
      oLargeBox.css({"display":"block"});
      //获取最大的left和top
      maxL = oMiddleBox.width()-oShadow.width();
      maxT = oMiddleBox.height()-oShadow.height();
      //大图片的left和top
      maxLargeImgL = oLargeImg.width()-oLargeBox.width();
      maxLargeImgT = oLargeImg.height()-oLargeBox.height();

        oMiddleBox.mousemove(function(ev){
         var e = ev || event;
         // var o = e.target || e.scrElement;
         var middleL=oMiddleBox.position();
         var boxL = box.position();
         var iL = e.pageX - oShadow.width()/2 - middleL.left - boxL.left;
         var iT = e.pageY - oShadow.height()/2 - middleL.top - boxL.top;

          
         if(iL < 0){
          iL = 0;
         }

         if(iT<0){
          iT=0;
         }

         if(iL>maxL){
          iL=maxL;
         }

         if(iT>maxT){
          iT=maxT;
         }
         
         var oLargeL = -iL * maxLargeImgL/ maxL;
         var oLargeT = -iT * maxLargeImgT/ maxT;
         oLargeImg.css({"left":oLargeL,"top":oLargeT});
         oShadow.css({"left":iL,"top":iT});
      });

    });

    oMiddleBox.mouseout(function(){
      //隐藏遮挡层
      oShadow.css({"display":"none"});

      //隐藏右侧盒子
      oLargeBox.css({"display":"none"});
    });
});



//产品选择
$(function(){
  $("#pro_color").click(function(){
    $("#pro_color").css({"border":"2px solid #cecece"});
  })

  var arrSize=$(".uls_01").children("li").toArray();//.eq("li").addClass("active").siblings().removeClass("active");

  $.each(arrSize,function(k,v){
     $(v).click(function(){
     $(v).addClass("active").siblings().removeClass("active");
   });
  });
});

//table_size
$("#tab_size").click(function(){
   $(".tab_size").show();
   $("#zdc").show();
});
$("#close").click(function(){
   $(".tab_size").hide();
   $("#zdc").hide();
});
$("#tab_sure").click(function(){
  $(".tab_size").hide();
  $("#zdc").hide();
})