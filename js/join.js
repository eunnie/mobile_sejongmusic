// 작성란 빈칸 있을 때 가입완료 버튼 누르면 경고창
function formCheck() {
  var join = document.join;

  if (!join.id.value) {
    alert("아이디를 입력해주세요!");
    join.id.focus();
    return false;
  }

  if (!join.pw.value) {
    alert("비밀번호를 입력해주세요!");
    join.pw.focus();
    return false;
  }

  if (join.pw.value.length < 8) {
    alert("비밀번호를 8자이상 입력해주세요!");
    join.pw.focus();
    return false;
  }

  join.submit();
}

// 체크박스 전체 선택
$(".checkbox_group").on("click", "#check_all", function () {
  $(this).parents(".checkbox_group").find("input").prop("checked", $(this).is(":checked"));
});

// 체크박스 개별 선택
$(".checkbox_group").on("click", ".normal", function () {
  var is_checked = true;

  $(".checkbox_group .normal").each(function () {
    is_checked = is_checked && $(this).is(":checked");
  });

  $("#check_all").prop("checked", is_checked);
});

// 약관 보기 버튼 펼치고 닫기 1
$("#textarea1").hide();
$(".txt_box .more1").click(function () {
  $("#textarea1").slideToggle("slow", function () {
    // Animation complete.
  });
});
// 약관 보기 버튼 펼치고 닫기 2
$("#textarea2").hide();
$(".txt_box .more2").click(function () {
  $("#textarea2").slideToggle("slow", function () {
    // Animation complete.
  });
});
// 약관 보기 버튼 펼치고 닫기 3
$("#textarea3").hide();
$(".txt_box .more3").click(function () {
  $("#textarea3").slideToggle("slow", function () {
    // Animation complete.
  });
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
