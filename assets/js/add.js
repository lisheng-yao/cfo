// <!-- //偵測滑入 -->

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".anime-set");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          // 判斷是否有動畫標籤
          if (
            !target.classList.contains("slide-in-right") &&
            !target.classList.contains("slide-in-left")
          ) {
            target.classList.add("slide-in-bottom");
          }
          observer.unobserve(target); // 進入後不再觀察
        }
      });
    },
    {
      threshold: 0.5, // 元素進入窗口50%觸發
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
});

// <!-- //下拉滑入 -->

$(document).ready(function () {
  // 觸發下拉選單顯示
  $(".nav-item.dropdown").on("mouseenter", function () {
    $(this).find(".dropdown-menu").addClass("show");
  });

  // 觸發下拉選單隱藏
  $(".nav-item.dropdown").on("mouseleave", function () {
    $(this).find(".dropdown-menu").removeClass("show");
  });
});
