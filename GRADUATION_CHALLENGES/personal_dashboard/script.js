const clock = document.getElementById("time");

function updateClock() {
    const time = new Date();

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    clock.innerText =
        `${hours.toString().padStart(2, '0')}:` +
        `${minutes.toString().padStart(2, '0')}:` +
        `${seconds.toString().padStart(2, '0')}`;
}

function updateGreeting() {
    const time = new Date();
    const hours = time.getHours();

    const greeting = document.getElementById("greetingText");

    if (hours < 12) {
        greeting.innerText = "Good Morning";
    }
    else if (hours < 17) {
        greeting.innerText = "Good Afternoon";
    }
    else {
        greeting.innerText = "Good Evening";
    }
}

updateClock();
updateGreeting();

setInterval(updateClock, 1000);

const darkButton = document.getElementById("darkModeToggleButton");

darkButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});