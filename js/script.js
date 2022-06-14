function openIntroPage(){
  $(".center").delay(500).animate({top:"30%"});
}

/*index mainpage 이미지변경 */
let img=$("#mainVisual ul li");
let btn=$("#mainVisual .btn>span");
let oldidx=0;
let idx=0;
let img_n=img.length;

function changeImg(idx){
  if(oldidx!=idx){
    btn.eq(oldidx).removeClass("active");
    btn.eq(idx).addClass("active");
    img.eq(oldidx).stop(true,true).fadeOut(300);
    img.eq(idx).stop(true,true).fadeIn(300);
  }
  oldidx=idx;
}
function changeAuto(){
  idx++;
  if(idx>img_n-1){
    idx=0;
  }
  changeImg(idx);
}
timer=setInterval(changeAuto,4000);

btn.click(function(){
  clearInterval(timer);
  idx=$(this).index();
  changeImg(idx);
  timer=setInterval(changeAuto,4000);
});


$(".top_btn").hide();
$(window).scroll(function(){
  if($(this).scrollTop()>1010){
    $(".top_btn").fadeIn();
  }else{
    $(".top_btn").fadeOut();
  }
});

$(document).ready(function(){
/* 큰메뉴 */
  $(".menu_toggle_btn").click(function(){
    $(this).toggleClass("menu-open")
    $(".menu").slideToggle("fast");
  });


/* bar메뉴*/
  $(".barMenu").mouseenter(function(){

    $(this).find("li>.smenu").stop().slideDown(500,"easeOutBounce");
  });

  $("header").mouseleave(function(){
    $(this).find("li>.smenu").stop().slideUp();
  });

});
//스크롤내렸을때 보이는 탑메뉴
$(".bar_fix").mouseenter(function(){
  $(this).find("li>.smenu_fix").stop().slideDown();
});

$("header").mouseleave(function(){
  $(this).find("li>.smenu_fix").stop().slideUp();
});
//스크롤내랬을때 bar(gnb)메뉴 
$(window).scroll(function(){
  if ($(this).scrollTop()>500){
    $(".bar_fix").css({"margin-top":"0px","transition":"all 1s"});
  }else{
    $(".bar_fix").css({"margin-top":"-140px","transition":"all 1s"});
  }
});

/* 헤더이미지 멋지게 등장 */
$(".center h1,.center_c h1,.center_e h1,.center_r h1,.center_cl h1").fadeIn(1000);

/* 동그란 원 빙글 */
$(window).scroll(function(){
  if($(this).scrollTop()>615){
    $(".box3").fadeIn(2000);
  }else{
    $(".box3").fadeOut();
  } 
});

$(window).scroll(function(){
  if($(this).scrollTop()>330){
    $(".box2").show("slow");
  }
});
/* familysite */
$(".familySite dl dt").click(function(){
  $(this).toggleClass("span");
  $(".familySite dd").stop().slideToggle();
});
/* 오시는길 */
$(".click1").click(function(){
  $(".popup").addClass("active");
});
$(".popup button").click(function(){
  $(".popup").removeClass("active")
});

/* 제안제보 */
$(".click3").click(function(){
  $(".popup3").addClass("active");
});
$(".popup3 .btn_l").click(function(){
  $(".popup3").removeClass("active")
});
$(".popup3 .btn_l,.btn_r").click(function(e)
{
	e.preventDefault();   
});
/* korea_popK */
$(".clickK").click(function(){
  $(".popk").addClass("active");
});
$(".popk .k_btn").click(function(){
  $(".popk").removeClass("active")
});
/*  */
$(".box10 dd:not(:first)").css("display","none");
//첫번째 dd를 제외하고 나머지는 보이지 않게 할 경우
$(".box10 dt:first").addClass("selected");
//첫번째 dd는 선택된상태의 클래스 불러옴

/* 제품정보 */
$(".box10 dl dt").click(function(){

  $(".box10 dl dt").find("+dd").stop().hide("slow");   
  $(this).find("+dd").stop().show("slow");
  $("dt").removeClass("selected"); 
  $(this).addClass("selected"); 

});

