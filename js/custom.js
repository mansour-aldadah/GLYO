$(document).ready(function () {
  let s = true;
  let d = true;
  $("input.send").keyup(function (e) {
    if ($("input.send").val() == "") {
      $(".send").css({
        color: "#6a6a6a",
      });
    } else {
      $(".send").css({
        color: "white",
      });
    }
  });

  $(".list").on("click", function () {
    if (s) {
      $(".list .pointer").slideToggle(300);
      $(".list .innerlist").delay(300).slideToggle(500);
      s = false;
    } else {
      $(".list .innerlist").slideToggle(500);
      $(".list .pointer").delay(500).slideToggle(300);
      s = true;
    }
  });

  $(".lang").on("click", function () {
    if (d) {
      $(".lang .pointer").slideToggle(300);
      $(".lang .innerlist").delay(300).slideToggle(500);
      d = false;
    } else {
      $(".lang .innerlist").slideToggle(500);
      $(".lang .pointer").delay(500).slideToggle(300);
      d = true;
    }
  });

  $(".lang .innerlist .one .Arb").on("click", function () {
    $(".flag").attr("src", "images/main_page/Kuwait.png");
    $(".language").text("العربية");
  });
  $(".lang .innerlist .one .Eng").on("click", function () {
    $(".flag").attr("src", "images/main_page/flag-button-square-250.png").css({
      width: "20px",
    });
    $(".language").text("English");
  });
});
