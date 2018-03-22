$(function(){
	//header部分轮播
  var arr=["images/banner_01.jpg","images/banner_02.jpg","images/banner_03.jpg"];
	var ord=0;
	var myTime=null;

	function initUI(){
		$("#banner_box li:first").css({"backgroundColor":"#e9002b"});
	}

	function initEvent(){
		$("#banner_box").mouseenter(function(){
			stop();
		});

		$("#banner_box").mouseleave(function(){
      go();
		});

		$("#banner_box li").click(function(){
      went($("#banner_box li").index(this));
		});

		$("#leftArrow").click(function(){
      let transord=ord-1;
      transord=transord<0?arr.length-1:transord;
      went(transord);
		});

		$("#rightArrow").click(function(){
      let transord=ord+1;
      transord=transord>arr.length-1?0:transord;
      went(transord);
		});
	}


	function go(){
      myTime=setInterval(function(){
        //记录要出去的图片序号
        let outOrd=ord;
         
         //进来的图片的序号
        ord++;
        if(ord>arr.length-1){
         	ord=0;
         }
  
         let $img=$("#banner_box img");
         // 出去
         $img.eq(outOrd).animate({"opacity":0},1000);
         //进来
         $img.eq(ord).animate({"opacity":1},1000);
        //siblings 找到目标元素的兄弟
         $("#banner_box li").eq(ord).css({"backgroundColor":"#e9002b"}).siblings().css({"backgroundColor":"white"});
      },2000);
	}

	function stop(){
		window.clearInterval(myTime);
	}

 	function went(transOrd){
        //记录要出去的图片序号
        let outOrd=ord;
         
         //进来的图片的序号
         ord=transOrd;
         if(ord>arr.length-1){
         	ord=0;
         }

         let $img=$("#banner_box img");
         // 出去
         $img.eq(outOrd).animate({"opacity":0},1000);
         //进来
         $img.eq(ord).animate({"opacity":1},1000);
        //siblings 找到目标元素的兄弟
         $("#banner_box li").eq(ord).css({"backgroundColor":"#e9002b"}).siblings().css({"backgroundColor":"white"});
      }

      $(function(){
          initUI();
          initEvent();
          go();
      });
});

 
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

  $('.list_menu').children('a').each(function(k,v){
    var width=$(this).parent().find(".nav_list_pub").width();
    var index=$(this).index;
    var left=width*index;
     $(v).parent().mouseenter(function(){
        $(this).css({left:left}).parent().find(".nav_list_pub").stop(true).slideDown();
     });
     $(v).parent().mouseleave(function(){
       
       $(this).css({left:left}).parent().find(".nav_list_pub").stop(true).slideUp();
     });
  });
});


//顶部悬浮
window.onscroll=function(){
  var nav = $("#nav");
  var oScroll = $(document).scrollTop();
  // $(document).scroll(function(){
    if(oScroll >= 122){
      nav.css({position:"fixed",top:0});
    } else {
      nav.css({position:"absolute",top:"122px"});
    }
  // });
 }

