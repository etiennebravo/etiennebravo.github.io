// Retreives system date and formats it
function date() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = month + "/" + day + "/" + year;

    // replace date element
    let element = document.getElementById('date');
    element.innerHTML = currentDate;
}

// Retreives system time and formats it
function clock() {
    // Test night time: 'December 10, 2024 03:24:00'
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let meridem = "";
    let cycle = "";
    let nightMessage = "What did you do today?";
    let dayMessage = "What are you going to do today?";

    // 12 hour format

    if (hour > 12) {
        hour = hour - 12;
        meridem = "PM"
    } else {
        meridem = "AM"
    }

    // Determine day or night

    if (hour >= 6 && meridem == "PM" || hour <= 4 && meridem == "AM") {
        cycle = "night";
        document.getElementById("day-night-image").src = "night.jpg";
        document.getElementById("day-night-image").alt = "Image of the starry sky. All rights to NASA."
        document.getElementById("day-night-message").innerHTML = nightMessage;
    } else {
        cycle = "day";
        document.getElementById("day-night-image").src="day.jpg";
        document.getElementById("day-night-image").alt = "Image of Puebla, Mexico."
        document.getElementById("day-night-message").innerHTML = dayMessage;
    }

    // Two number format (00:00:00 AM)

    if (hour < 10) {
        hour = "0" + hour;
    }

    if (min < 10) {
        min = "0" + min;
    }

    if (sec < 10) {
        sec = "0" + sec;
    }

    // replace clock element
    let currentTime = hour + ":" + min + ":" + sec + " " + meridem;
    let clock = document.getElementById('clock');
    clock.innerHTML = currentTime;

    // replace day-night element
    let message = document.getElementById('day-night');
    message.innerHTML = cycle;
}

// initialize
date();
clock();

// execute clock every second
setInterval(clock, 1000);
