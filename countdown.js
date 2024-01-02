document.addEventListener('DOMContentLoaded', function () {
    const countdownElement = document.getElementById('countdown');

    // Set the countdown date (YYYY, MM (0-based), DD, HH, mm, ss)
    const countdownDate = new Date(2024, 0, 1, 0, 0, 0).getTime();

    function updateCountdown() {
        const currentDate = new Date().getTime();
        const timeDifference = countdownDate - currentDate;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (timeDifference <= 0) {
            countdownElement.innerHTML = 'Countdown expired!';
        }
    }

    // Initial call to set up the countdown
    updateCountdown();

    // Update the countdown every second
    setInterval(updateCountdown, 1000);
});
