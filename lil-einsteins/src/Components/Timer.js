import React, {useCallback} from "react";
import "../App.css";
import {useNavigate} from "react-router-dom";

export default function TimerTest() {
	// Clock keeps track of miliseconds
	// Time sets the current time
	const [clock, time] = React.useState(0); // Default value for time

	const navigate = useNavigate();
	const handleLevelChange = useCallback(
		() => navigate("/Home", {replace: true}),
		[navigate]
	);

	// Checks if the timer is running
	const [play, start] = React.useState(false); // False is default value

	// Hook runs any time the user presses play and timer is turned on
	React.useEffect(() => {
		// Declaring the current interval of the timer is set to null
		let current = null;

		// If the timer is turned on by play button
		if (play) {
			current = setInterval(() => {
				time((prevTime) => prevTime + 10); // Every 10 miliseconds the time is increased by 10 miliseconds
			}, 10); // Increases the time every 10 miliseconds
		} else if (!play) {
			// If the player presses the play button then the time is cleared
			clearInterval(current);
		}
	}, [play]);

	if (clock === 300000) {
		handleLevelChange();
	}

	return (
		<div className="Timer mx-3 my-3">
			<h2>Game Time: </h2>
			<div id="display">
				<span>{("0" + Math.floor((clock / 60000) % 60)).slice(-2)}:</span>
				<span>{("0" + Math.floor((clock / 1000) % 60)).slice(-2)}:</span>

				<span>{("0" + ((clock / 10) % 100)).slice(-2)}</span>
			</div>

			<div id="buttons">
				{!play && clock === 0 && (
					// Sets timer to true which starts timer is play button is pressed
					<button onClick={() => start(true)}>Play</button>
				)}
				{play && (
					// Sets timer to false so turns timer off if game is done
					<button onClick={() => start(false)}>Done</button>
				)}
				{!play && clock > 0 && <button onClick={() => time(0)}></button>}
			</div>
		</div>
	);
}
