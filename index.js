var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  let width = screen.width;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("img").style.width = "80vw";
  } else {
    document.getElementById("img").style.width = "100vw";
    if (width > 1020) {
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

function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show");
}

function myFunction4() {
  document.getElementById("myDropdown4").classList.toggle("show");
}

function myFunction5() {
  document.getElementById("myDropdown5").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (!e.target.matches(".dropbtn")) {
    var myDropdown = document.getElementById("myDropdown1");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }

  if (!e.target.matches(".dropbtn")) {
    var myDropdown = document.getElementById("myDropdown2");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }

  if (!e.target.matches(".dropbtn")) {
    var myDropdown = document.getElementById("myDropdown3");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }

  if (!e.target.matches(".dropbtn")) {
    var myDropdown = document.getElementById("myDropdown4");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }

  if (!e.target.matches(".dropbtn")) {
    var myDropdown = document.getElementById("myDropdown5");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};

if (screen.width < 1020) {
  document.getElementById("mobile").classList.remove("nohidden");
  document.getElementById("desktop").classList.add("nohidden");
}
