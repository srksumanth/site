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
        $(".patch").css({"display":"inherit"}).removeClass("slideOutLeft")
        .addClass("slideInLeft");
        x = 0;
      } else {
        $(".patch").css({"display":"none"}).addClass("slideOutLeft")
          .removeClass("slideInLeft");
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
            $item.removeClass("fadeInUp").addClass("fadeOutUp");
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
            $item.removeClass("fadeOutUp")
              .addClass("fadeInUp")
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
            $item.removeClass("fadeInUp").addClass("fadeOutUp");
          }, 50 * i);
        });
        setTimeout(function(){
          $(".projects-sub").css({
            "display": "none"
          })
        },400);
        setTimeout(function(){
        $(".p1").each(function(i) {
          var $item = $(this);
          setTimeout(function() {
            $item.removeClass("fadeOutUp").addClass("fadeInUp").css({
              "display": "inherit"
            });
          }, 50 * i);
        });
      },450);
    });
    //rt-arrow hover project
    $(".project-link").hover(function(){
      $(".p-arrow").css({"opacity":"1","marginLeft":"0px"});
    },
    function(){
      $(".p-arrow").css({"opacity":"0","marginLeft":"10px"});
    });
      //rt-arrow hover lecture
    $(".lecture-link").hover(function(){
      $(".l-arrow").css({"opacity":"1","marginLeft":"0px"});
    },
    function(){
      $(".l-arrow").css({"opacity":"0","marginLeft":"10px"});
    });
      //rt-arrow hover overview
      $(".overview-link").hover(function(){
        $(".o-arrow").css({"opacity":"1","marginLeft":"0px"});
      },
      function(){
        $(".o-arrow").css({"opacity":"0","marginLeft":"10px"});
      });
      // R & C rules format
      $(".rules-format-link").hover(function(){
        $(".rf-arrow").css({"opacity":"1","marginLeft":"0px"});
      },
      function(){
        $(".rf-arrow").css({"opacity":"0","marginLeft":"10px"});
      });

    //lectures-sub click
    $("#lectures").click(function() {
        $(".p1").each(function(i) {
          var $item = $(this);
          setTimeout(function() {
            $item.removeClass("fadeInUp").addClass("fadeOutUp");
            console.log(i);
          }, 50 * i);
          setTimeout(function(){
            $(".p1").css({
              "display": "none"
            });
          },600);
        });
        setTimeout(function(){
        $(".lectures-sub").each(function(i) {
          var $item = $(this);
          setTimeout(function() {
            $item.removeClass("fadeOutUp")
              .addClass("fadeInUp")
              .css({
                "display": "inherit"
              });
          }, 50 * i);
        });
      },650);
    });
    // lectures back click
    $("#l-back").click(function() {
        $(".lectures-sub").each(function(i) {
          var $item = $(this);
          setTimeout(function() {
            $item.removeClass("fadeInUp").addClass("fadeOutUp");
          }, 50 * i);
        });
        setTimeout(function(){
          $(".lectures-sub").css({
            "display": "none"
          })
        },400);
        setTimeout(function(){
        $(".p1").each(function(i) {
          var $item = $(this);
          setTimeout(function() {
            $item.removeClass("fadeOutUp").addClass("fadeInUp").css({
              "display": "inherit"
            });
          }, 50 * i);
        });
      },450);
    });
// R & C Rules and format
$("#rules-format").click(function() {
  $(".p1").each(function(i) {
    var $item = $(this);
    setTimeout(function() {
      $item.removeClass("fadeInUp").addClass("fadeOutUp");
      console.log(i);
    }, 50 * i);
    setTimeout(function(){
      $(".p1").css({
        "display": "none"
      });
    },600);
  });
  setTimeout(function(){
  $(".rules-format-sub").each(function(i) {
    var $item = $(this);
    setTimeout(function() {
      $item.removeClass("fadeOutUp")
        .addClass("fadeInUp")
        .css({
          "display": "inherit"
        });
    }, 50 * i);
  });
},650);
});
//back click
$("#rules-format-back").click(function() {
  $(".rules-format-sub").each(function(i) {
    var $item = $(this);
    setTimeout(function() {
      $item.removeClass("fadeInUp").addClass("fadeOutUp");
    }, 50 * i);
  });
  setTimeout(function(){
    $(".rules-format-sub").css({
      "display": "none"
    })
  },400);
  setTimeout(function(){
  $(".p1").each(function(i) {
    var $item = $(this);
    setTimeout(function() {
      $item.removeClass("fadeOutUp").addClass("fadeInUp").css({
        "display": "inherit"
      });
    }, 50 * i);
  });
},450);
});

    //overview-sub click
    $("#overview").click(function() {
        $(".p1").each(function(i) {
          var $item = $(this);
          setTimeout(function() {
            $item.removeClass("fadeInUp").addClass("fadeOutUp");
            console.log(i);
          }, 50 * i);
          setTimeout(function(){
            $(".p1").css({
              "display": "none"
            });
          },600);
        });
        setTimeout(function(){
        $(".overview-sub").each(function(i) {
          var $item = $(this);
          setTimeout(function() {
            $item.removeClass("fadeOutUp")
              .addClass("fadeInUp")
              .css({
                "display": "inherit"
              });
          }, 50 * i);
        });
      },650);
    });
    // lectures back click
    $("#o-back").click(function() {
        $(".overview-sub").each(function(i) {
          var $item = $(this);
          setTimeout(function() {
            $item.removeClass("fadeInUp").addClass("fadeOutUp");
          }, 50 * i);
        });
        setTimeout(function(){
          $(".overview-sub").css({
            "display": "none"
          })
        },400);
        setTimeout(function(){
        $(".p1").each(function(i) {
          var $item = $(this);
          setTimeout(function() {
            $item.removeClass("fadeOutUp").addClass("fadeInUp").css({
              "display": "inherit"
            });
          }, 50 * i);
        });
      },450);
    });
  });


  if($(window).outerWidth()<1086){
    $("h2 small").html("R&amp;C");
    $("#nav-icon").css({"display":"inherit"});
  }
  else{
      $("h2 small").html("RESEARCH AND CONSULTANCY");
      $("#nav-icon").css({"display":"none"});
  }

  $(window).on('resize',function(){
    if($(window).outerWidth()<1086){
      $("h2 small").html("R&amp;C");
      $("#nav-icon").css({"display":"inherit"});
    }
    else{
        $("h2 small").html("RESEARCH AND CONSULTANCY");
        $("#nav-icon").css({"display":"none"});
    }


  });
