$(".accordion_tab").click(function () {
  $(".accordion_tab").each(function () {
    $(this).parent().removeClass("active");
    $(this).removeClass("active");
  });
  $(this).parent().addClass("active");
  $(this).addClass("active");
});
// 헤더 숨김
$(function () {
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $("header").outerHeight();
  $(window).scroll(function (event) {
    didScroll = true;
  });
  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);
  function hasScrolled() {
    var st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta) return;
    if (st > lastScrollTop && st > navbarHeight) {
      $("header").slideUp("fast");
    } else {
      if (st + $(window).height() < $(document).height()) {
        $("header").slideDown("fast");
      }
    }
    lastScrollTop = st;
  }
});
