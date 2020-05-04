// Select The header
var landing = document.querySelector("header"),
  // Put all the images in array
  imago = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
// Make the images works
// landing.style.backgroundImage = 'url("imges/04.jpg")';
//  Get all the image's Array and get them 3axwa2i
// var Random = Math.floor(Math.random() * imago.length);

// Now Change images in seconds

setInterval(() => {
  // Set random
  //Get all the image's Array and get them 3axwa2i
  var Random = Math.floor(Math.random() * imago.length);

  // change background
  landing.style.backgroundImage = 'url("imges/' + imago[Random] + '")';
}, 10000);

var doc = document.querySelector(".icon-toggle .fa-gear");

doc.onclick = function () {
  //   var off = document.getElementById("on");
  //   off.classList.add("open");
  this.classList.toggle("fa-spin");

  document.querySelector(".setting-box").classList.toggle("open");
};
