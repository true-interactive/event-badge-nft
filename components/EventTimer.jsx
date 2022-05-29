import { useEffect } from 'react'

export default function EventTimer(props) {
    useEffect(() => {
        // Set the date we're counting down to
        const startDate = new Date(props.startDate);

        // Update the count down every 1 second
        var x = setInterval(function updateTimer() {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the start date
            var distance = startDate - now;

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("timer").innerHTML = "EXPIRED";
            }

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="demo"
            document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
            document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
            document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
            document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');
            document.getElementById("timer").style.display = "initial";
        }, 1000);
    });

    return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={props.className}>
            <g>
                <text id='timer' x="50%" y="50%">
                    <tspan id='days'>00</tspan>.<tspan id='hours'>00</tspan>.<tspan id='minutes'>00</tspan>.<tspan id='seconds'>00</tspan>
                </text>
            </g>
        </svg>
    );
}
