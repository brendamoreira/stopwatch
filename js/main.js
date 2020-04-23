let startButton = document.querySelector('.start');
startButton.addEventListener('click', startStop);
let seconds = document.querySelector('.seconds');
let minutes = document.querySelector('.minutes');
let hours = document.querySelector('.hours');
let sec = 0;
let min = 0;
let hour = 0;
let interval;
function startStop() {
    interval = setInterval(function(){
        sec += 1;
        seconds.innerHTML = sec < 10 ? '0'+ sec: sec;
        if (sec == 60) {
            min += 1;
            sec = 0;
            minutes.innerHTML = min < 10 ? '0' + min: min;
            if (min == 60) {
                hour += 1;
                min = 0;
                hours.innerHTML = hour < 10 ? '0' + hour: hour;
            }
        }
        
    }, 1000);
    startButton.innerHTML = "Stop";
}
let restartButton = document.querySelector('.restart');
restartButton.addEventListener('click', function(event) {
    sec = 0;
    min = 0;
    hour = 0;
    seconds.innerHTML = '00';
    minutes.innerHTML = '00';
    hours.innerHTML = '00';
})