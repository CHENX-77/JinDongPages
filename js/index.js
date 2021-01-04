$(function() {
    $(document).ready(function() {
      //1、获取元素
      var hour=document.querySelector('.hour');
      var minute=document.querySelector('.minute');
      var second=document.querySelector('.second');
      var inputTime=+new Date('2021-1-20 12:00:00');//倒计时的结束时间，自己设置时间
        countdown();
        setInterval(countdown, 1000);
        function countdown() {
          var nowTime=+new Date(); //返回的是当前时间的总的毫秒数
          var times=(inputTime-nowTime)/1000; // times是剩余时间的总的毫秒数
          var h=parseInt(times/60/60%24);
          h=h<10?'0'+h:h;//判断数值小于10的情况 如 0-9改为 00-09
          hour.innerHTML=h;//更改div里面的内容 把h给获取元素hour的内容
          var m=parseInt(times/60%60);
          m=m<10?'0'+m:m;
          minute.innerHTML=m;//同上
          var s=parseInt(times%60);
          s=s<10?'0'+s:s;
          second.innerHTML=s;//同上
        }
    });
    $("#navi li").mouseover(function() {
        $(".content").show();
        var index = $(this).index();
        $(".content>div").eq(index).show().siblings().hide();
    })
    $("#navi li").mouseout(function() {
        $(".content").hide();
    })

    $(".news-t a").mouseover(function() {
        var index = $(this).index();
        $(".news-b ul").eq(index).show().siblings().hide();
        $(".redline").eq(index).show().siblings('.redline').hide();
    })
    $(".content").mouseover(function() {
        $(this).show();
    });
    $(".content").mouseout(function() {
        $(this).hide();
    });

    for(var i = 0; i < $(".t-img li").length; i++) {
        $(".circle").append("<li></li>");
    }
    $(".circle li").eq(3).addClass("current");

    var index=3;
    $(".circle li").mouseover(function() {
        var index = $(this).index();
        $(this).addClass("current").siblings().removeClass("current");
        $(".t-img li").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
    });

    var time = setInterval(move,2000);
    function move() {
        index++;
        if (index==$(".t-img li").length){
            index=0
        }
        $(".circle li").eq(index).addClass("current").siblings().removeClass("current");
        $(".t-img li").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
    };
    $(".grid-col2-t").hover(function () {
        clearInterval(time);
    },
    function () {
        time=setInterval(move,2000);
    });
    $(".arrow-r").click(function () {
       move();
    });
    function moveL() {
        index--;
        if (index==-1){
            index=$(".t-img li").length-1;
        }
        $(".circle li").eq(index).addClass("current").siblings().removeClass("current");
        $(".t-img li").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
    }
    $(".arrow-l").click(function () {
        moveL();
    });

    $(".fixedtool li").mouseover(function() {
        var index = $(this).index();
        $(this).addClass("current").siblings().removeClass("current");
    });

});
$(document).ready( function(){
  var index=0;//标记当前图片索引
  var f;
  dingshiqi();
  function dingshiqi(){
    f=setInterval(function(){

     if(index==$(".bebox").length-1){
        index=0;
        $(".bebox").css("opacity","0");
        $(".bebox").eq(index).css("opacity","1");
        $(".circle-btn").css("background-color","#fff")
        $(".circle-btn").eq(index).css("background-color","#f10215")
      }
     else{
        index++;
        $(".bebox").css("opacity","0");
        $(".bebox").eq(index).css("opacity","1");
        $(".circle-btn").css("background-color","#fff")
        $(".circle-btn").eq(index).css("background-color","#f10215")
      }
     },3000)
  }
  $(".arrow-L").click(function(){
    clearInterval(f);
       if(index==0){
         index=$(".bebox").length-1;
         $(".bebox").css("opacity","0");
         $(".bebox").eq(index).css("opacity","1");
         $(".circle-btn").css("background-color","#fff")
         $(".circle-btn").eq(index).css("background-color","#f10215")
         dingshiqi();
       }
        else{
         index--;
         $(".bebox").css("opacity","0");
         $(".bebox").eq(index).css("opacity","1");
         $(".circle-btn").css("background-color","#fff")
         $(".circle-btn").eq(index).css("background-color","#f10215")
         dingshiqi();
       }
     })
  $(".arrow-R").click(function(){
      clearInterval(f);
     if(index==$(".bebox").length-1){
        index=0;
        $(".bebox").css("opacity","0");
        $(".bebox").eq(index).css("opacity","1");
        $(".circle-btn").css("background-color","#fff")
        $(".circle-btn").eq(index).css("background-color","#f10215")
        dingshiqi();
     }
     else{
       index++;
       $(".bebox").css("opacity","0");
       $(".bebox").eq(index).css("opacity","1");
       $(".circle-btn").css("background-color","#fff")
       $(".circle-btn").eq(index).css("background-color","#f10215")
        dingshiqi();
    }
  })
  $(".clrcle .circle-btn").click(function(){
    clearInterval(f);
    var indexx=$(this).index();//获取当前触发按钮的位置
    index=indexx;
    $(".bebox").css("opacity","0");
    $(".bebox").ed(index).css("opacity","1");
    $(".circle-btn").css("background-color","#fff")
    $(".circle-btn").eq(index).css("background-color","#f10215")
    dingshiqi();
  })
})

// 平行轮播图
function lunbo(d){
  var NowFrame;
    if(Number(d))	{
        NowFrame=d;
    }
    else
    {
        NowFrame=0;
    }
    for(var i=0;i<4;i++){
      document.getElementsByClassName("tab-body")[i].style.display = "none";
      document.getElementsByClassName("special-tab-lk")[i].style.border = "none";
      document.getElementsByClassName("special-tab-lk")[i].style.color ="#999";
      document.getElementsByClassName("special-tab-lk")[i].style.fontWeight ="400";
    }
    document.getElementsByClassName("tab-body")[NowFrame].style.display = "block";
    document.getElementsByClassName("special-tab-lk")[NowFrame].style.borderBottom ="1px solid red";
    document.getElementsByClassName("special-tab-lk")[NowFrame].style.color ="red";
    document.getElementsByClassName("special-tab-lk")[NowFrame].style.fontWeight ="600";
}