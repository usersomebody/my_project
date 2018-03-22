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
//顶部悬浮
// window.onscroll=function(){
//   var nav = $("#nav");
//   var oScroll = $(document).scrollTop();
//   // $(document).scroll(function(){
//     if(oScroll >= 122){
//       nav.css({position:"fixed",top:0});
//     } else {
//       nav.css({position:"absolute",top:"122px"});
//     }
//   // });
//  }

//66afe9
//登录正则

$(function(){
  //手机验证
  $('#username').click(function(){
      $(this).css({"border":"1px solid #66afe9"});
      $('#userMsg').html(" ");
  });
  $('#username').blur(function(){
    var regUser = /^1(3|4|5|7|8|9)\d{9}$/;
    var userId = this.value;
    if(userId.length==0){
      $('#userMsg').css({"color":"#ec003d","fontSize":"13px","text-indent":"5px","position":"absolute","left":"163px"});
      $('#username').css({"border":"1px solid #ec003d"});
      $('#userMsg').html("请输入手机号");
    }else if(!regUser.test(userId)){
      $('#userMsg').css({"color":"#ec003d","fontSize":"13px","text-indent":"5px","position":"absolute","left":"163px"});
      $('#userMsg').html("输入的手机格式不正确");
      $('#username').css({"border":"1px solid #ec003d"});
    }else{
       $('#username').css({"border":"1px solid #eee"});
       $('#userMsg').html(" ");
    }
  });


  //密码验证
  $('#password').click(function(){
      $(this).css({"border":"1px solid #66afe9"});
      $('#passMsg').html(" ");
  });
  $('#password').blur(function(){
    //var regUser = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/; 
    var userId = this.value;
    if(userId.length==0){
      $('#passMsg').css({"color":"#ec003d","fontSize":"13px","text-indent":"5px","position":"absolute","left":"163px"});
      $('#password').css({"border":"1px solid #ec003d"});
      $('#passMsg').html("请输入新密码");
    }else{
      $('#password').css({"border":"1px solid #eee"});
      $('#passMsg').html(" ");
    }
    /*
    else if(!regUser.test(userId)){
      $('#userMsg').css({"color":"#ec003d","fontSize":"13px","text-indent":"5px","position":"absolute","left":"163px"});
      $('#userMsg').html("输入的手机格式不正确");
      $('#username').css({"border":"1px solid #ec003d"});
    }*/
   
  });

});

//注册正则
//用户验证
$(function(){
  $('#userPhone').click(function(){
      $(this).css({"border":"1px solid #66afe9"});
      $('#phoneMsg').html(" ");
  });
  $('#userPhone').blur(function(){
    var regPhone = /^1(3|4|5|7|8|9)\d{9}$/;
    var PhoneId = this.value;
    if(PhoneId.length==0){
      $('#phoneMsg').css({"color":"#ec003d","fontSize":"13px","text-indent":"5px","position":"absolute","left":"60px"});
      $('#userPhone').css({"border":"1px solid #ec003d"});
      $('#phoneMsg').html("请输入手机号");
    }else if(!regPhone.test(PhoneId)){
      $('#phoneMsg').css({"color":"#ec003d","fontSize":"13px","text-indent":"5px","position":"absolute","left":"60px"});
      $('#phoneMsg').html("输入的手机格式不正确");
      $('#userPhone').css({"border":"1px solid #ec003d"});
    }else{
      $('#userPhone').css({"border":"1px solid #eee"});
      $('#phoneMsg').html(" ");
    }
  });
});

//密码验证
$(function(){

   $("#userPass").click(function(){
      $(this).css({"border":"1px solid #66afe9"});
      $('#wordMsg').html(" ");
   });

   $("#userPass").blur(function(){    
    var regPass = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;  //
    var passId = this.value;
    if(passId.length==0){
      $("#userPass").css({"border":"1px solid #ec003d"});
      $("#wordMsg").css({"color":"#ec003d","fontSize":"13px","text-indent":"5px","position":"absolute","left":"32px"});
      $("#wordMsg").html("请输入新密码");
    }
    else if(!regPass.test(passId)){
      $("#userPass").css({"border":"1px solid #ec003d"});
      $("#wordMsg").css({"color":"#ec003d","fontSize":"13px","text-indent":"5px","position":"absolute","left":"32px"});
      $("#wordMsg").html("格式错误,请以字母开头，不要出现特殊字符");
    }else{
     $("#userPass").css({"border":"1px solid #eee"});
     $("#wordMsg").html("");
    }
  });

});

//重复验证
$(function(){
  $("#check_sureMa").click(function(){
    $(this).css({"border":"1px solid #66afe9"});
    $('#word_sureMsg').html(" ");
  })
  $("#check_sureMa").blur(function(){   
      var regUser = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;  //
      var userId = this.value;
      var userPass=$("#userPass").val();
      var check_sureMa=$("#check_sureMa").val();
    if(userId.length==0){
      $("#check_sureMa").css({"border":"1px solid #ec003d"});
      $("#word_sureMsg").css({"color":"#ec003d","fontSize":"13px","text-indent":"5px","position":"absolute","left":"60px"});
      $("#word_sureMsg").html("请再次输入新密码");
    }
    if(userPass!=check_sureMa){
      $("#check_sureMa").css({"border":"1px solid #ec003d"});
      $("#word_sureMsg").css({"color":"#ec003d","fontSize":"13px","text-indent":"5px","position":"absolute","left":"60px"});
      $("#word_sureMsg").html("两次密码必须一致");
    }else{
     $("#check_sureMa").css({"border":"1px solid #eee"});
     // $("#word_sureMsg").html("");
    }
        //else{
        //     $("#repeatMsg").css({"color":"green","fontSize":"12px","text-indent":"5px","position":"absolute"});
    //  $("#repeatMsg").html("密码一致");
    // }
  });
});

//验证码
  function checkMa(){
    var i=0;
    var str="";
    while(i<4){
      var oNum=parseInt(Math.random()*123);
      if((oNum>=48 && oNum<=57)||(oNum>=65 && oNum<=90)||(oNum>=97 && oNum<=122)){
        str+=String.fromCharCode(oNum);
        i++;
      }
    }
    document.getElementById("getMa").innerHTML=str; 
  }
  window.onload=function(){
    checkMa();
    document.getElementById("getMa").onclick=checkMa;
}

$(function(){

  $("#checkMa").click(function(){
     $(this).css({"border":"1px solid #66afe9"});
     $("#checkMsg").html("");
  });
  
  
  $("#checkMa").blur(function(){
    var checkMa=$("#checkMa").val();
    var checkMsg=$("#checkMsg").html();
      if(checkMa.length==0){
        $(this).css({"border":"1px solid #ec003d"});
        $("#checkMsg").css({"color":"#ec003d","fontSize":"13px","text-indent":"5px","position":"absolute","left":"48px"})
        $("#checkMsg").html("请输入验证码");
      }else if(checkMa!=checkMsg){
        $(this).css({"border":"1px solid #ec003d"});
        $("#checkMsg").css({"color":"#ec003d","fontSize":"13px","text-indent":"5px","position":"absolute","left":"48px"})
        $("#checkMsg").html("验证码错误");
      }else{
        $(this).css({"border":"1px solid #eee"});
        $("#checkMsg").html("验证码正确");
      }   
  })
});

$(function(){

  $("#iphoneMa").click(function(){
     $(this).css({"border":"1px solid #66afe9"});
     $("#phone_checkMsg").html("");
  });
  
  $("#iphoneMa").blur(function(){
    var iphoneMa=$("#iphoneMa").val();

    if(iphoneMa.length==0){
      $(this).css({"border":"1px solid #ec003d"});
      $("#phone_checkMsg").css({"color":"#ec003d","fontSize":"13px","text-indent":"5px","position":"absolute","left":"73px"});
      $("#phone_checkMsg").html("请输入验证码");
    }
  })

});


//忘记密码
/*
$(function(){
  $("#forget_password").click(function(){
    $("body").append("<div></div>").addClass("zdc").css({"width":"100%","height":"100%","background":"#a09b9b14","position":"fixed","opacity":"0.3","filter":"alpha(opacity=30)","z-index":"998"});
    $("#content_forget").css({"display":"block"});
  });
  $("#delete").click(function(){
    $("body").find("div .zdc").remove();
    $("#content_forget").css({"display":"none"});
  });
});
*/
//password
$(function(){
  $("#forget_password").click(function(){
     $("#content_forget").css({"display":"block"});
     $("#zdc").css({"display":"block"});
  });
  
  $("#delete").click(function(){
    $("#content_forget").css({"display":"none"});
    $("#zdc").css({"display":"none"});
  });
});