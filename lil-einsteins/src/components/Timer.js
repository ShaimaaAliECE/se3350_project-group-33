import React from "react";

import "../App.css";


const Timer = () => {

  const [clock, time] = React.useState(0);

  const [play, start] = React.useState(false);

  React.useEffect(() => {

    let current = null;

    if (play) {

      current = setInterval(() => {

        time((prevTime) => prevTime + 10);

      }, 10);

    } else if (!play) 
    {
      clearInterval(current);
    }

    return () => clearInterval(current);

  }, [play]);

  return (
    <div className="Timer">
      <h2>Game Time: </h2>
      <div id="display">
        <span>
        {("0" + Math.floor((clock / 20000) % 60)).slice(-2)}:
        </span>
        <span>
        {("0" + Math.floor((clock/ 1000) % 60)).slice(-2)}:
        </span>

        <span>
        {("0" + ((clock/ 10) % 100)).slice(-2)}
        </span>
      </div>

      <div id="buttons">
        {!play && clock === 0 && (
          <button onClick={() => start(true)}>Play</button>
        )}
        {play && <button 
        onClick={() => start(false)}>Done
        </button>}
        {!play && clock> 0 && (
          <button onClick={() => time(0)}>Play Again
          </button>
        )}
      </div>
    </div>
  );
};

export default Timer;
