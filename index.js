  var x = 1;
  $(function() {
    $("#nav-icon,#close-menu").click(function() {
      if (x == 1) {
        $(".content").css({
            "display": "inherit"
          })
          .removeClass("slideOutLeft")
          .addClass("slideInLeft");
        $("#close-menu").addClass("close-overlay");
        x = 0;
      } else {
        $(".content").addClass("slideOutLeft")
          .removeClass("slideInLeft");
        $("#close-menu").removeClass("close-overlay");
        x = 1;
      }
      $("#nav-icon").toggleClass('open');
    });
    // projects click
    $("#projects").click(function() {
        $(".p1").each(function(i) {
          var $item = $(this);
          setTimeout(function() {
            $item.removeClass("fadeInLeft").addClass("fadeOutLeft");
            console.log(i);
          }, 50 * i);
          setTimeout(function(){
            $(".p1").css({
              "display": "none"
            });
          },600);
        });
        setTimeout(function(){
        $(".projects-sub").each(function(i) {
          var $item = $(this);
          setTimeout(function() {
            $item.removeClass("fadeOutLeft")
              .addClass("fadeInLeft")
              .css({
                "display": "inherit"
              });
          }, 50 * i);
        });
      },650);
    });
    // project back click
    $("#p-back").click(function() {
        $(".projects-sub").each(function(i) {
          var $item = $(this);
          setTimeout(function() {
            $item.removeClass("fadeInLeft").addClass("fadeOutLeft");
          }, 50 * i);
        });
        setTimeout(function(){
          $(".projects-sub").css({
            "display": "none"
          })
        },400);
        setTimeout(function(){
        $(".content div").each(function(i) {
          var $item = $(".p1");
          setTimeout(function() {
            $item.removeClass("fadeOutLeft").addClass("fadeInLeft").css({
              "display": "inherit"
            });
          }, 50 * i);
        });
      },450);


    });





  });
