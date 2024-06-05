var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  var V = document.getElementById("Voltar");
  var next = document.getElementById("next");
  var Avançar = document.getElementById("Avançar");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    Avançar.style.display = "none";

    x[slideIndex - 1].style.display = "block";
    if (slideIndex == 1) {
      V.style.display = "none";
      next.style.display = "inline";
    } else {
      V.style.display = "inline";
      next.style.display = "inline";
    }
    if (slideIndex == 4) {
      next.style.display = "none";
      Avançar.style.display = "block";
    }
  }
}
