  var x = 1;
$(function(){
  $(".ham,#close-menu").click(function(){
  if(x==1){
    $(".content").css({"display":"inherit"});
    $(".content").removeClass("bounceOutRight");
    $(".content").addClass("slideInRight");
    $("#close-menu").addClass("close-overlay");
      x=0;
    }
  else{
    $(".content").addClass("bounceOutRight");
    $(".content").removeClass("slideInRight");
    $("#close-menu").removeClass("close-overlay");
      x=1;
    }
  });
});
