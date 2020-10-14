var mouseXpercentage, mouseYpercentage;

var audio1 = document.getElementsByTagName("audio")[0];
var audio2 = document.getElementsByTagName("audio")[1];
var audio3 = document.getElementsByTagName("audio")[2];
var audio4 = document.getElementsByTagName("audio")[3];

$(document).mousemove(function(event) {

  // Mouse-around background glow FX
  windowWidth = $(window).width();
  windowHeight = $(window).height();
  
  mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
  mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
  
  $('.radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #001172, #000000)');


  // Main menu audio
  $("#main-menu-item1").hover(function() {
    audio1.play();
  }, function() {
    audio1.currentTime = 0;
  });
  $("#main-menu-item2").hover(function() {
    audio2.play();
  }, function() {
    audio2.currentTime = 0;
  });
  $("#main-menu-item3").hover(function() {
    audio3.play();
  }, function() {
    audio3.currentTime = 0;
  });
  $("#main-menu-item4").hover(function() {
    audio4.play();
  }, function() {
    audio4.currentTime = 0;
  });

  // Profile menu audio
  $("#profile-menu-item1").hover(function() {
    audio1.play();
  }, function() {
    audio1.currentTime = 0;
  });
  $("#profile-menu-item2").hover(function() {
    audio2.play();
  }, function() {
    audio2.currentTime = 0;
  });

  // Projects menu
  $("#projects-menu-item1").hover(function() {
    audio3.play();
  }, function() {
    audio3.currentTime = 0;
  });
});
