import { useEffect } from "react";

function Timer(dis) {
  useEffect(function () {
    setInterval(function () {
      dispatchEvent({ type: "tick" });
    }, 1000);
  }, [dispatch]);
  return <div className="timer">05:00</div>;
}
export default Timer;
