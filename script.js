$(document).ready(function () {
  setColorRule('#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF');
});

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function setColorRule(color1, color2, color3, color4, color5) {
  var vBase = $("#hddBase").val();
  var vRule = vBase.replace('{0}', color1).replace('{1}', color2).replace('{2}', color3).replace('{3}', color4).replace('{4}', color5);
  $("#css-rules").val(vRule);
  $("#color1").css('background-color', color1);
  $("#color2").css('background-color', color2);
  $("#color3").css('background-color', color3);
  $("#color4").css('background-color', color4);
  $("#color5").css('background-color', color5);
}

function randomPalette() {
  var r = getRandomInt(0, 256);
  var g = getRandomInt(0, 256);
  var b = getRandomInt(0, 256);
  return rgbToHex(r, g, b).toUpperCase();
}

function generateRules() {
  var vRule1 = randomPalette();
  var vRule2 = randomPalette();
  var vRule3 = randomPalette();
  var vRule4 = randomPalette();
  var vRule5 = randomPalette();
  setColorRule(vRule1, vRule2, vRule3, vRule4, vRule5);
}

function cleanRules() {
  setColorRule('#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF');
}
