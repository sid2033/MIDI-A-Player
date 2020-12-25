document.addEventListener("DOMContentLoaded", function() { 
    startPlayer(); 
});

let player;

function startPlayer() {
    player = document.getElementById("player");
    player.controls = false;
}

function play_sound() {
    player.play();
}

function pause_sound() {
    player.pause();
}

function stop_sound() {
    player.pause();
    player.currentTime = 0;
}

function change_volume() {
    player.volume = document.getElementById("change_volume").value;
}

function changeSRC() {
    let file = document.getElementById('audInput').files;
    const objectURL = URL.createObjectURL(file[0]);
    player.src = objectURL; 
    player.play();
}


