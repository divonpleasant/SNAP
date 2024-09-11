let startTime;
let interval;
let elapsedTimeRecorded = 0;
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const timeDisplay = document.getElementById('timeDisplay');
const resetButton = document.getElementById('resetButton');

function updateDisplay() {
    const currentTime = new Date();
    const elapsedTime = (currentTime - startTime) / 1000;

    if (elapsedTime >= 60) {
        const minutes = Math.floor(elapsedTime / 60);
        const seconds = (elapsedTime % 60).toFixed(2);
        timeDisplay.textContent = `${minutes} minutes ${seconds} seconds`;
    } else {
        timeDisplay.textContent = `${elapsedTime.toFixed(2)} seconds`;
    }
}

startButton.addEventListener('click', () => {
    startTime = new Date();
    startButton.disabled = true;
    stopButton.disabled = false;
    interval = setInterval(updateDisplay, 100); // Update every 100 milliseconds
});

stopButton.addEventListener('click', () => {
    clearInterval(interval);
    const endTime = new Date();
    elapsedTimeRecorded = (endTime - startTime) / 1000;
    startButton.disabled = false;
    stopButton.disabled = true;

    // Log the recorded time to the console for testing purposes
    console.log(`Recorded time: ${elapsedTimeRecorded} seconds`);
});

// To reset the clock when the reset button is pressed.
resetButton.addEventListener('click', () => {
    clearInterval(interval);
    startTime = null;
    elapsedTimeRecorded = 0;
    timeDisplay.textContent = "0 seconds";
    startButton.disabled = false;
    stopButton.disabled = true;
})
