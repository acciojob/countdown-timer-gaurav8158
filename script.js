// Get the necessary HTML elements
const durationInput = document.getElementById('userInput');
const startButton = document.getElementById('myButton');
const remainingTime = document.getElementById('countDown');
const lastTime = document.getElementById('endTime');

// Function to start the countdown timer
function startCountdown(duration) {
  const startTime = new Date().getTime();
  const endTime = new Date(startTime + duration * 60000); // Convert duration to milliseconds

  console.log("startTime" ,startTime,"endTime",endTime);
  // Update the remaining time every second
  const intervalID = setInterval(updateTime, 1000);

  // Function to update the remaining time
  function updateTime() {
    const currentTime = new Date().getTime();
    const remaining = endTime - currentTime;
console.log("currentTime", currentTime ,"remaining" ,remaining )
    if (remaining > 0) {
      const minutes = Math.floor((remaining / 60000) % 60);
      const seconds = Math.floor((remaining / 1000) % 60);

      remainingTime.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
      remainingTime.textContent = '00:00';
      const hour1 =(new Date()).getHours();
      const minutes1 =(new Date()).getMinutes();
      const seconds1 = (new Date()).getSeconds();
      lastTime.textContent =`${hour1}:${minutes1}:${seconds1}`;
      clearInterval(intervalID);
    }
  }

  // Display the end time
  const endHours = endTime.getHours().toString().padStart(2, '0');
  const endMinutes = endTime.getMinutes().toString().padStart(2, '0');
  endTime.textContent = `${endHours}:${endMinutes}`;
}

// Event listener for the start button
startButton.addEventListener('click', function() {
  const duration = parseInt(durationInput.value);
  if (!isNaN(duration)) {
    startCountdown(duration);
  }
});

// Timer for the default options
 // startCountdown(10); // 10 minutes countdown
