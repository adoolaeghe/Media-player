$(document).ready(function() {
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
        $("#buy").delay(200).queue(function(n) {
          $(this).fadeIn(100);;
          $(this).dequeue();
        });
        $(".wrapper1").css("animation", 50 + "s rotate360 infinite linear");
        $(".wrapper2").css("animation", 50 + "s rotate360 infinite linear");
        $(".graph").animate({opacity: "1.0"});
        $("#play").animate({height: "160px", width: "160px", top: "70px", left: "70px"}, "fast" );
        $("#stop").css("display", "block");
    });

    $('#stop').click(function() {
        audioElement.pause();
        $("#play").animate({height: "60px", width: "60px", top: "120px", left: "120px"}, "fast");
        $("#play").css("border","solid 1px grey");
        $("#stop").css("display", "none");
        $("#buy").css("display", "none");
    });
});
