  var x = 1;
$(function(){
  $(".ham,#close-menu").click(function(){
  if(x==1){
    $(".content").css({"display":"inherit"})
                 .removeClass("bounceOutRight")
                 .addClass("slideInRight");
    $("#close-menu").addClass("close-overlay");
    $(".ham .menu").addClass("fadeOutRight").removeClass("fadeInRight");
    $(".ham .closed").css({"visibility":"visible"}).addClass("fadeInRight").removeClass("fadeOutRight");
      x=0;
    }
  else{
    $(".content").addClass("bounceOutRight")
                 .removeClass("slideInRight");
    $("#close-menu").removeClass("close-overlay");
    $(".ham .menu").addClass("fadeInRight").removeClass("fadeOutRight");
    $(".ham .closed").addClass("fadeOutRight").removeClass("fadeInRight");
      x=1;
    }
  });
});
