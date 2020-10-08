var valuesIndex = 1;
showDivs(valuesIndex);

function plusDivs(n) {
  showDivs(valuesIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("value-slides");
  if (n > x.length) {valuesIndex = 1}
  if (n < 1) {valuesIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[valuesIndex-1].style.display = "inline-block";

  if (valuesIndex == 1)
    $('#div-values-cards')[0].style = "background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(0, 247, 255, 0.15), rgba(255, 255, 255, 0));";
  else if (valuesIndex == 2)
    $('#div-values-cards')[0].style = "background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 123, 0, 0.15), rgba(255, 255, 255, 0));";
  else if (valuesIndex == 3)
    $('#div-values-cards')[0].style = "background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(43, 255, 0, 0.15), rgba(255, 255, 255, 0));";
}