let b = true;
$(document).ready(function () {
  $(".cata .container .flex .right .type").on("click", function () {
    $(this).toggleClass("active");
    $(this).children(".innerType").slideToggle(500);
  });

  re();

  $(window).resize(function () {
    re();
  });
  $(".cata .setting").on("click", function () {
    if (b) {
      $(".cata .setting1").show(300);
      $(".cata .setting2").delay(300).show(300);
      $(".cata .container .flex .right").delay(600).show(600);
      b = false;
    } else {
      $(".cata .setting2").delay(600).hide(300);
      $(".cata .setting1").delay(900).hide(300);
      $(".cata .container .flex .right").hide(600);
      b = true;
    }
  });
});

function re() {
  b = true;
  if (Math.round($(window).width()) < 751) {
    $(".cata .setting2").hide();
    $(".cata .setting1").hide();
    $(".cata .container .flex .right").hide();
    if ($(window).scrollTop() >= 340) {
      $(".cata .setting").show();
    } else {
      $(".cata .setting").hide();
    }
  } else if (Math.round($(window).width()) > 750) {
    $(".cata .setting").hide();
    $(".cata .setting2").hide();
    $(".cata .setting1").hide();
    $(".cata .container .flex .right").show();
  }

  $(window).on("scroll", function () {
    if ($(window).width() < 750) {
      if ($(window).scrollTop() >= 340) {
        $(".cata .setting").show();
      } else {
        b = true;
        $(".cata .setting").hide(300);
        $(".cata .setting2").hide(100);
        $(".cata .setting1").hide(100);
        $(".cata .container .flex .right").hide(100);
      }
    } else {
      $(".cata .setting").hide(300);
      $(".cata .setting2").hide(100);
      $(".cata .setting1").hide(100);
      $(".cata .container .flex .right").show();
    }
  });
}
