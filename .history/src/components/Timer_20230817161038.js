import React, { useEffect } from "react";

function Timer() {
  useEffect(function () {
    setInterval(function () {
      console.Console.log("tick");
    }, 1000);
  }, []);
  return <div className="timer">05:00</div>;
}
export default Timer;
