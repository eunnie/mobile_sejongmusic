//사이드바
$(document).ready(function () {
  $(".sub").css({ display: "none" });
  $(".gnb>li>a").click(function () {
    $(".sub").each(function () {
      console.log($(this).css("display"));
      if ($(this).css("display") == "block") {
        $(this).slideUp("slow");
      }
    });
    $(this).next("ul").slideDown("slow");
  });
});
// 서치박스
$(".search-box").click(function (e) {
  $("#logo").hide();
  e.stopPropagation();
});

$(document).click(function () {
  $("#logo").show();
});
