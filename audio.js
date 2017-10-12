$(document).ready(function() {
  $(".wrapper1").css("animation", 30 + "s rotate360 infinite linear");
  var names = ["bob","john","alice"];
  var x = 0;
  var y = 3;
  var time = (30000)/y;

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'public/vanishing.mp3');
    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);

    audioElement.addEventListener("canplay",function(){
        $("#length").text("Duration:" + audioElement.duration + " seconds");
        $("#source").text("Source:" + audioElement.src);
        $("#status").text("Status: Ready to play").css("color","green");
    });

    audioElement.addEventListener("timeupdate",function(){
        $("#currentTime").text("Current second:" + audioElement.currentTime);
    });

    $('#play').click(function() {
        audioElement.play();
        $(".wrapper1").css("animation", 30 + "s rotate360 infinite linear");
        if($(".svg").attr("src") == "public/pause.svg"){
          $(".graph").animate({opacity: "0.5"});
          $(".svg").attr("src","public/play.svg");
      } else {
        $(".graph").animate({opacity: "1.0"});
        $(".svg").attr("src","public/pause.svg");
      }
        $("#stop").css("display", "block");
    });
    $('.addCircle').click(function(){
      y += 1;
      time = (30000)/y;
    });
});
