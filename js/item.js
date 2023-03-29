$(document).ready(function () {
  let b = true;
  let c = true;

  $(".item .container .all .addTo span").on("click", function () {
    if (b) {
      $(this).text("ADDED");
      $(".item .container .all .addTo").css({
        color: "#00C000",
      });
      b = false;
    } else {
      $(this).text("+ ADD TO WISHLIST");
      $(".item .container .all .addTo").css({
        color: "#43484d",
      });
      b = true;
    }
  });

  $(".item .container .all .content .selectColor .color").on(
    "click",
    function () {
      $(this).html("&check;").siblings(".color").text("");
    }
  );

  $(".item .container .all .content .selectSize .size").on(
    "click",
    function () {
      $(this)
        .css({
          color: "#ffffff",
          backgroundColor: "#333333",
        })
        .siblings(".size")
        .css({
          color: "#333333",
          backgroundColor: "#ffffff",
        });
    }
  );

  $(".item .container .all .quantity .add").on("click", function () {
    if (c) {
      $(this).html('<i class="fa fa-unlock"></i>ADDED');
      $(this).css({
        backgroundColor: "#539b53",
      });
      c = false;
    } else {
      $(this).html('<i class="fa fa-lock"></i>ADD TO BAG');
      $(this).css({
        backgroundColor: "#333333",
      });
      c = true;
    }
  });

  $(".item .container .all .flex .images .left img").on("click", function () {
    if ($(this).attr("src") === "images/4_item/Layer 52.png") {
      $(".item .container .all .flex .images .right img").attr(
        "src",
        "images/4_item/Layer 52.png"
      );
    } else if ($(this).attr("src") === "images/4_item/Layer 48.png") {
      $(".item .container .all .flex .images .right img").attr(
        "src",
        "images/4_item/Layer 48.png"
      );
    } else if ($(this).attr("src") === "images/4_item/Layer 51.png") {
      $(".item .container .all .flex .images .right img").attr(
        "src",
        "images/4_item/Layer 51.png"
      );
    } else {
      $(".item .container .all .flex .images .right img").attr(
        "src",
        "images/4_item/Layer 54.png"
      );
    }
  });

});
