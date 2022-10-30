const showPara1 = [
  document.querySelector(".hide1"),
  document.querySelector(".hide2"),
  document.querySelector(".hide3"),
  document.querySelector(".hide4"),
  document.querySelector(".hide5"),
];
const arrow = [
  document.querySelector(".arrow-down1"),
  document.querySelector(".arrow-down2"),
  document.querySelector(".arrow-down3"),
  document.querySelector(".arrow-down4"),
  document.querySelector(".arrow-down5"),
];

const title = [
  document.querySelector(".title1"),
  document.querySelector(".title2"),
  document.querySelector(".title3"),
  document.querySelector(".title4"),
  document.querySelector(".title5"),
];

title[0].addEventListener("click", function () {
  showPara1[1].classList.add("hide");
  title[1].classList.remove("bold");
  arrow[1].classList.remove("active");

  showPara1[2].classList.add("hide");
  title[2].classList.remove("bold");
  arrow[2].classList.remove("active");

  showPara1[3].classList.add("hide");
  title[3].classList.remove("bold");
  arrow[3].classList.remove("active");

  showPara1[4].classList.add("hide");
  title[4].classList.remove("bold");
  arrow[4].classList.remove("active");
  if (showPara1[0].classList.contains("hide")) {
    showPara1[0].classList.remove("hide");
    arrow[0].classList.add("active");
    title[0].classList.add("bold");
  } else {
    showPara1[0].classList.add("hide");
    arrow[0].classList.remove("active");
    title[0].classList.remove("bold");
  }
});

title[1].addEventListener("click", function () {
  showPara1[2].classList.add("hide");
  title[2].classList.remove("bold");
  arrow[2].classList.remove("active");

  showPara1[3].classList.add("hide");
  title[3].classList.remove("bold");
  arrow[3].classList.remove("active");

  showPara1[4].classList.add("hide");
  title[4].classList.remove("bold");
  arrow[4].classList.remove("active");

  showPara1[0].classList.add("hide");
  title[0].classList.remove("bold");
  arrow[0].classList.remove("active");
  if (showPara1[1].classList.contains("hide")) {
    showPara1[1].classList.remove("hide");
    arrow[1].classList.add("active");
    title[1].classList.add("bold");
  } else {
    showPara1[1].classList.add("hide");
    arrow[1].classList.remove("active");
    title[1].classList.remove("bold");
  }
});
title[2].addEventListener("click", function () {
  showPara1[1].classList.add("hide");
  title[1].classList.remove("bold");
  arrow[1].classList.remove("active");

  showPara1[3].classList.add("hide");
  title[3].classList.remove("bold");
  arrow[3].classList.remove("active");

  showPara1[4].classList.add("hide");
  title[4].classList.remove("bold");
  arrow[4].classList.remove("active");

  showPara1[0].classList.add("hide");
  title[0].classList.remove("bold");
  arrow[0].classList.remove("active");
  if (showPara1[2].classList.contains("hide")) {
    showPara1[2].classList.remove("hide");
    arrow[2].classList.add("active");
    title[2].classList.add("bold");
  } else {
    showPara1[2].classList.add("hide");
    arrow[2].classList.remove("active");
    title[2].classList.remove("bold");
  }
});
title[3].addEventListener("click", function () {
  showPara1[1].classList.add("hide");
  title[1].classList.remove("bold");
  arrow[1].classList.remove("active");

  showPara1[2].classList.add("hide");
  title[2].classList.remove("bold");
  arrow[2].classList.remove("active");

  showPara1[4].classList.add("hide");
  title[4].classList.remove("bold");
  arrow[4].classList.remove("active");

  showPara1[0].classList.add("hide");
  title[0].classList.remove("bold");
  arrow[0].classList.remove("active");
  if (showPara1[3].classList.contains("hide")) {
    showPara1[3].classList.remove("hide");
    arrow[3].classList.add("active");
    title[3].classList.add("bold");
  } else {
    showPara1[3].classList.add("hide");
    arrow[3].classList.remove("active");
    title[3].classList.remove("bold");
  }
});
title[4].addEventListener("click", function () {
  showPara1[1].classList.add("hide");
  title[1].classList.remove("bold");
  arrow[1].classList.remove("active");

  showPara1[2].classList.add("hide");
  title[2].classList.remove("bold");
  arrow[2].classList.remove("active");

  showPara1[3].classList.add("hide");
  title[3].classList.remove("bold");
  arrow[3].classList.remove("active");

  showPara1[0].classList.add("hide");
  title[0].classList.remove("bold");
  arrow[0].classList.remove("active");
  if (showPara1[4].classList.contains("hide")) {
    showPara1[4].classList.remove("hide");
    arrow[4].classList.add("active");
    title[4].classList.add("bold");
  } else {
    showPara1[4].classList.add("hide");
    arrow[4].classList.remove("active");
    title[4].classList.remove("bold");
  }
});

arrow[0].addEventListener("click", function () {
  showPara1[1].classList.add("hide");
  title[1].classList.remove("bold");
  arrow[1].classList.remove("active");

  showPara1[2].classList.add("hide");
  title[2].classList.remove("bold");
  arrow[2].classList.remove("active");

  showPara1[3].classList.add("hide");
  title[3].classList.remove("bold");
  arrow[3].classList.remove("active");

  showPara1[4].classList.add("hide");
  title[4].classList.remove("bold");
  arrow[4].classList.remove("active");
  if (showPara1[0].classList.contains("hide")) {
    showPara1[0].classList.remove("hide");
    arrow[0].classList.add("active");
    title[0].classList.add("bold");
  } else {
    showPara1[0].classList.add("hide");
    arrow[0].classList.remove("active");
    title[0].classList.remove("bold");
  }
});

arrow[1].addEventListener("click", function () {
  showPara1[2].classList.add("hide");
  title[2].classList.remove("bold");
  arrow[2].classList.remove("active");

  showPara1[3].classList.add("hide");
  title[3].classList.remove("bold");
  arrow[3].classList.remove("active");

  showPara1[4].classList.add("hide");
  title[4].classList.remove("bold");
  arrow[4].classList.remove("active");

  showPara1[0].classList.add("hide");
  title[0].classList.remove("bold");
  arrow[0].classList.remove("active");
  if (showPara1[1].classList.contains("hide")) {
    showPara1[1].classList.remove("hide");
    arrow[1].classList.add("active");
    title[1].classList.add("bold");
  } else {
    showPara1[1].classList.add("hide");
    arrow[1].classList.remove("active");
    title[1].classList.remove("bold");
  }
});
arrow[2].addEventListener("click", function () {
  showPara1[1].classList.add("hide");
  title[1].classList.remove("bold");
  arrow[1].classList.remove("active");

  showPara1[3].classList.add("hide");
  title[3].classList.remove("bold");
  arrow[3].classList.remove("active");

  showPara1[4].classList.add("hide");
  title[4].classList.remove("bold");
  arrow[4].classList.remove("active");

  showPara1[0].classList.add("hide");
  title[0].classList.remove("bold");
  arrow[0].classList.remove("active");
  if (showPara1[2].classList.contains("hide")) {
    showPara1[2].classList.remove("hide");
    arrow[2].classList.add("active");
    title[2].classList.add("bold");
  } else {
    showPara1[2].classList.add("hide");
    arrow[2].classList.remove("active");
    title[2].classList.remove("bold");
  }
});
arrow[3].addEventListener("click", function () {
  showPara1[1].classList.add("hide");
  title[1].classList.remove("bold");
  arrow[1].classList.remove("active");

  showPara1[2].classList.add("hide");
  title[2].classList.remove("bold");
  arrow[2].classList.remove("active");

  showPara1[4].classList.add("hide");
  title[4].classList.remove("bold");
  arrow[4].classList.remove("active");

  showPara1[0].classList.add("hide");
  title[0].classList.remove("bold");
  arrow[0].classList.remove("active");
  if (showPara1[3].classList.contains("hide")) {
    showPara1[3].classList.remove("hide");
    arrow[3].classList.add("active");
    title[3].classList.add("bold");
  } else {
    showPara1[3].classList.add("hide");
    arrow[3].classList.remove("active");
    title[3].classList.remove("bold");
  }
});
arrow[4].addEventListener("click", function () {
  showPara1[1].classList.add("hide");
  title[1].classList.remove("bold");
  arrow[1].classList.remove("active");

  showPara1[2].classList.add("hide");
  title[2].classList.remove("bold");
  arrow[2].classList.remove("active");

  showPara1[3].classList.add("hide");
  title[3].classList.remove("bold");
  arrow[3].classList.remove("active");

  showPara1[0].classList.add("hide");
  title[0].classList.remove("bold");
  arrow[0].classList.remove("active");
  if (showPara1[4].classList.contains("hide")) {
    showPara1[4].classList.remove("hide");
    arrow[4].classList.add("active");
    title[4].classList.add("bold");
  } else {
    showPara1[4].classList.add("hide");
    arrow[4].classList.remove("active");
    title[4].classList.remove("bold");
  }
});
