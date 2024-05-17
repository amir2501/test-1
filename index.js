// loading screen

document.onreadystatechange = function () {
  var state = document.readyState;
  document.getElementById("nav").classList.add("hidden");
  if (state == "complete") {
    setTimeout(function () {
      document.getElementById("interactive");
      document.getElementById("loading").style.display = "none";
      document.getElementById("nav").classList.remove("hidden");
    }, 1000);
  }
};

//  end of loading screen script

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  let width = screen.width;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("img").style.width = "80vw";
  } else {
    document.getElementById("img").style.width = "100vw";
    if (width > 800) {
      document.getElementById("absolute").style.position = "relative";
      document.getElementById("absolute").style.left = "0px";
    }
  }
  prevScrollpos = currentScrollPos;
};

document.querySelector("nav input").onclick = function () {
  if (this.checked) this.setAttribute("aria-expanded", true);
  else this.setAttribute("aria-expanded", false);
};

