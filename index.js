  var x = 1;
$(function(){
  $(".ham").click(function(){
  if(x==1){
    $(".content").css({"display":"inherit"});
    $(".content").removeClass("bounceOutRight");
    $(".content").addClass("slideInRight");
      x=0;
    }
  else{
    $(".content").addClass("bounceOutRight");
    $(".content").removeClass("slideInRight");
      x=1;
    }
  });
});
