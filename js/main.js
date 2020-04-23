let startButton = document.querySelector('.start');
startButton.addEventListener('click', startStop);
let second = document.querySelector('.seconds');
let seconds = second.innerHTML;
let minute = document.querySelector('.minutes');
let minutes = minute.innerHTML;
let hour = document.querySelector('.hours');
let hours = hour.innerHTML
function startStop() {
    console.log('clicked');
    setInterval(function(){
        console.log('1second');
    }, 1000);
    setInterval(function(){
        console.log('1minute');
    }, 60000);
    setInterval(function(){
        console.log('')
    }, 3600000)
}
let restartButton = document.querySelector('.restart');
restartButton.addEventListener('click', function(event) {
    console.log('clickedR')
})