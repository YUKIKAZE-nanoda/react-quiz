import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.flooer(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins<10}{mins}:{seconds}
    </div>
  );
}
export default Timer;
