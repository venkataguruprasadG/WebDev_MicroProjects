const happybtn = document.getElementById('happy-btn');
const board = document.getElementById('board');
const calmbtn = document.getElementById('calm-btn');
const energeticbtn = document.getElementById('energetic-btn');
const statustext = document.getElementById('status-text');

happybtn.addEventListener('click', function (event) {
    board.style.backgroundColor = "green";
});

calmbtn.addEventListener('click', function (event) {
    board.style.backgroundColor = 'lightblue';
    statustext.innerText = "I am feeling Zen";
});

energeticbtn.addEventListener('click', function () {
    board.style.backgroundColor = 'orange';
    statustext.innerText = "Let's Go";
});