Number.prototype.format = function () {
  if (this == 0) return 0;
  var reg = /(^[+-]?\d+)(\d{3})/;
  var n = this + "";
  while (reg.test(n)) n = n.replace(reg, "$1" + "," + "$2");
  return n;
};
String.prototype.format = function () {
  var num = parseFloat(this);
  if (isNaN(num)) return "0";
  return num.format();
};
var basic_amount = parseInt("2000000");
function change_qty2(t) {
  var min_qty = 1;
  var this_qty = $("#ct_qty").val() * 1;
  var max_qty = "2";
  if (t == "m") {
    this_qty -= 1;
    if (this_qty < min_qty) {
      alert("수량은 1개 이상 선택해 주십시오.");
      return;
    }
  } else if (t == "p") {
    this_qty += 1;
    if (this_qty > max_qty) {
      alert("죄송합니다. 재고가 부족합니다.");
      return;
    }
  }
  var show_total_amount = basic_amount * this_qty;
  $("#ct_qty").val(this_qty);
  $("#it_pay").val(show_total_amount);
  $("#total_amount").html(show_total_amount.format());
}
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
