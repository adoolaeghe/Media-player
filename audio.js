$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://www.soundjay.com/misc/sounds/bell-ringing-01.mp3');

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
        $("#status").text("Status: Playing");
        console.log($(".graph").css("opacity"))
        $(".graph").css("opacity", "1.0");
    });

    $('#pause').click(function() {
        audioElement.pause();
        $("#status").text("Status: Paused");
        $(".graph").css("opacity", "0.5");
    });

    $('#restart').click(function() {
        audioElement.currentTime = 0;
    });
});
