let countdownInterval;

    function startCountdown() {
      const durationInput = document.getElementById("duration");
      const countdownDisplay = document.getElementById("countdown");
      const duration = parseInt(durationInput.value, 10);

      if (isNaN(duration) || duration <= 0) {
        alert("Please enter a valid duration.");
        return;
      }

      let remainingTime = duration;

      countdownInterval = setInterval(function() {
        if (remainingTime <= 0) {
          clearInterval(countdownInterval);
          countdownDisplay.innerText = "Time's up!";
        } else {
          countdownDisplay.innerText = remainingTime;
          remainingTime--;
        }
      }, 1000);
    }