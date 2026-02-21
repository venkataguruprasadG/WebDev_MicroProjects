const countDisplay = document.getElementById('count-value');
const incrementbutton = document.getElementById('increment-btn');
const decrementbutton = document.getElementById('decrement-btn');

let count = 0
incrementbutton.addEventListener('click', function () {
    count += 1
    countDisplay.innerText = count
    if (count < 0) {
        countDisplay.style.color = 'red';
    }
    else if (count === 10) {
        countDisplay.style.color = 'green';
    }
    else {
        countDisplay.style.color = 'black';
    }
});

decrementbutton.addEventListener('click', function () {
    count -= 1
    countDisplay.innerText = count
    if (count < 0) {
        countDisplay.style.color = 'red';
    }
    else if (count === 10) {
        countDisplay.style.color = 'green';
    }
    else {
        countDisplay.style.color = 'black';
    }
});