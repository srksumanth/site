  var x = 1;
$(function(){
  $("#nav-icon,#close-menu").click(function(){
  if(x==1){
    $(".content").css({"display":"inherit"})
                 .removeClass("bounceOutRight")
                 .addClass("slideInRight");
    $("#close-menu").addClass("close-overlay");
      x=0;
    }
  else{
    $(".content").addClass("bounceOutRight")
                 .removeClass("slideInRight");
    $("#close-menu").removeClass("close-overlay");
      x=1;
    }
    $("#nav-icon").toggleClass('open');
  });
});
// $(document).ready(function(){
// 	$('#nav-icon').click(function(){
// 		$(this).toggleClass('open');
// 	});
// });
