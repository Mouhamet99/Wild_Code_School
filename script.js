var a = document.querySelector(".icon");
if (a) {
  a.addEventListener(
    "click",
    function (e) {
      let x = document.querySelector("ul");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    },
    false
  );
}

var y = document.querySelector("#open");
var c = document.getElementById("close");
var pop = document.querySelector(".popup");
var blur = document.querySelector(".blur-bg");
if (y) {
  y.addEventListener(
    "click",
    function (e) {
      blur.style.display = "flex";
      pop.style.display = "block";
      pop.style.filter = "blur(0)";
    },
    false
  );
}
if (c) {
  c.addEventListener(
    "click",
    function () {
      blur.style.filter = "blur(0px)";
      pop.style.display = "none";
      blur.style.display = "none";
    },
    false
  );
}
