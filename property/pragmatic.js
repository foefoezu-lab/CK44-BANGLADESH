var x = [
  0, 609, 1458, 1519, 2687, 826, 62, 722, 2425, 2120, 1089, 1708, 588, 786, 2378, 2765, 329, 1388, 1045, 1847, 2500, 1761, 2383, 271, 733, 2884, 2913, 1569, 1436, 1448, 1987, 410, 1585, 99, 1234, 572, 66, 1290, 2189, 2870, 369, 537, 1532,
  1570, 2125, 2947, 762, 580, 2567, 1041, 1573, 2783, 2608, 302, 1187, 2977, 2602, 890, 2816, 2378, 1452, 748, 757, 625, 2089, 1478, 563, 784, 539, 2092, 1240, 826, 2211, 837, 2673, 2233, 645, 1934, 105, 2036, 1554, 579, 1833, 2425, 1102,
  2391, 2913, 2143, 1044, 1461, 1997, 2424, 1934, 904, 2195, 2069, 2369, 1672, 1620, 2195, 1552, 2454, 578, 2164, 2416, 1051, 2449, 1009, 2940, 332, 848, 1310, 2882, 2952, 18, 550, 1773, 700, 1968, 1041, 1364, 1271, 865, 2211, 1707, 1866,
  2869, 1535, 2705, 2963, 918, 1316, 82, 34, 1352, 2622, 1662, 2490, 739, 2752, 2866, 1692, 1919, 1041, 821, 537, 2263, 1245, 317, 175, 16, 2638, 2155, 2110, 2468, 1713, 1428, 859, 834, 1510, 361, 285, 2681, 811, 242, 1758, 2741, 400, 615,
  1659, 296, 1864, 1647, 376, 501, 566, 2092, 294, 2809, 1142, 262, 958, 2979, 830, 151, 1659, 29, 1756, 351, 2075, 1171, 1642, 1818, 158, 2468, 2816, 2670, 291, 2407, 88, 153, 646, 280, 2824, 2803, 942, 106, 2611, 1399, 1839, 839, 953,
  1896, 235, 2566, 1673, 1074, 414, 1645, 1708, 2798, 1210, 287, 1275, 2234, 1760, 783, 1083, 2912, 800, 1110, 2976, 1838, 427, 2490, 2889, 2222, 2455, 199, 834, 2662, 1371, 1178, 2935, 2947, 2388, 516, 1688, 1858, 295, 2587, 2479, 2456,
  695, 2543, 2914, 2522, 1313, 1004, 605, 2039, 423, 1563, 1048, 1212, 1794, 2134, 625, 856, 1715, 340, 2891, 1018, 444, 2753, 1887, 903, 2842, 50, 785, 2889, 37, 1232, 63, 1540, 932, 1091, 2526, 1507, 2235, 2912, 526, 2490, 2798, 1270,
  1678, 269, 730, 61, 1450, 1025,
];

var lastTime = localStorage.getItem(x + "_lastTime");
var currentTime = new Date().getTime();

var time_rand = [300000, 360000, 420000, 480000, 540000, 600000, 660000, 720000, 780000, 840000, 900000];
var random_time = Math.floor(Math.random() * time_rand.length - 1) + 1;

var time_to_refresh = localStorage.getItem(x + "_time_to_refresh") == null ? time_rand[random_time] : localStorage.getItem(x + "_time_to_refresh");
if (localStorage.getItem(x + "_time_to_refresh") == null) {
  localStorage.setItem(x + "_time_to_refresh", time_to_refresh);
}

/* Random RTP  */
for (let i = 1; i < 220; i++) {
  if (!lastTime || currentTime - lastTime >= time_to_refresh) {
    localStorage.setItem(x + "_time_to_refresh", time_rand[random_time]);

    var xx = Math.floor(Math.random() * 99) + 1;

    localStorage.setItem(x + "_lastTime", currentTime);
    localStorage.setItem(x + "_xx_" + i, xx);

    var random_val_1 = [15, 25, 35, 45, 55];
    var random_1 = random_val_1[Math.floor(Math.random() * random_val_1.length - 1) + 1];
    localStorage.setItem("random_1_xx_" + x + "_" + i, random_1);

    var random_val_2 = [10, 20, 30, 40, 50];
    var random_2 = random_val_2[Math.floor(Math.random() * random_val_2.length - 1) + 1];
    localStorage.setItem("random_2_xx_" + x + "_" + i, random_2);

    var random_val_3 = [3, 5, 7, 9];
    var random_3 = random_val_3[Math.floor(Math.random() * random_val_3.length - 1) + 1];
    localStorage.setItem("random_3_xx_" + x + "_" + i, random_3);

    var random_val_4 = [20, 30, 40, 50, 60, 70];
    var random_4 = random_val_4[Math.floor(Math.random() * random_val_4.length - 1) + 1];
    localStorage.setItem("random_4_xx_" + x + "_" + i, random_4);
  } else {
    var xx = localStorage.getItem(x + "_xx_" + i);

    var random_1 = localStorage.getItem("random_1_xx_" + x + "_" + i);
    var random_2 = localStorage.getItem("random_2_xx_" + x + "_" + i);
    var random_3 = localStorage.getItem("random_3_xx_" + x + "_" + i);
    var random_4 = localStorage.getItem("random_4_xx_" + x + "_" + i);
  }

  const as = "percent-bar-" + i;
  const asd = "percent-txt-" + i;
  var percentTxt = document.getElementById("percent-txt-" + i);
  var bar = document.getElementById("percent-bar-" + i);
  const bartext = document.getElementById("card-title" + i);
  if (!percentTxt || !bar) continue;

  percentTxt.innerHTML = xx + "%";
  $("#percent-bar-" + i)
    .attr("aria-valuenow", xx)
    .css("width", xx + "%");
  if (xx < 30) {
    bar.classList.add("red");
  } else if (xx > 70) {
    bar.classList.add("green");
  } else {
    bar.classList.add("yellow");
  }

  $("#" + asd)
    .parent()
    .parent()
    .parent()
    .attr("onclick", "show_popup('" + asd + "', '" + random_1 + "', '" + random_2 + "', '" + random_3 + "', '" + random_4 + "')");
}

/* Menampilkan Popup Pola Main*/
function show_popup(id_percent, random_1, random_2, random_3, random_4) {
  var number_txt = $("#" + id_percent).html();
  var percent = number_txt.replace("%", "").replace("RTP ", "");

  if (percent < 30) {
    $("#popup-container-bad").fadeIn(500);
  } else {
    $("#popup-container-win").fadeIn(500);

    $("#tips_number_1").html(random_1);
    $("#tips_number_2").html(random_2);
    $("#tips_number_3").html(random_3);
    $("#tips_number_4").html(random_4);
  }
}

function close_popup() {
  $(".popup-container").fadeOut(500);
}

/* Menampilkan Popup Ads Lowongan Admin*/
$(document).ready(function () {
  $("#popup-container-ads").fadeIn(0);
});

/* Slide Show Menu Mobile*/
var slides = document.getElementsByClassName("mySlides");

var slideIndex = 1;
var x = window.matchMedia("(max-width: 992px)");
media(x); // Call listener function at run time
x.addListener(media); // Attach listener function on state changes

function media(x) {
  if (x.matches) {
    showSlides(slideIndex);
  } else {
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  }
}

function plusSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  if (slideIndex <= slides.length - 4 || slideIndex >= 1) {
    showSlides((slideIndex += n));
  }
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

var x = window.matchMedia("(max-width: 992px)");
console.log(x);

function showSlides(n) {
  var i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

/* Slide Show Images */
var slideIndexImages = 1;
showSlidesImages(slideIndexImages);

// Next/previous controls
function plusSlidesImages(n) {
  showSlidesImages((slideIndexImages += n));
}

// Thumbnail image controls
function currentSlideImages(n) {
  showSlidesImages((slideIndexImages = n));
}

function showSlidesImages(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow-images");
  var dots = document.getElementsByClassName("dot-slideshow-images");
  if (n > slides.length) {
    slideIndexImages = 1;
  }
  if (n <= 0) {
    slideIndexImages = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-slideshow-images", "");
  }
  /*slides[slideIndexImages - 1].style.display = "block";*/
  /*dots[slideIndexImages-1].className += " active-slideshow-images";*/
}
