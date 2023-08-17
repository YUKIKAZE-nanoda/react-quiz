import React from "react";

function FinishScreen({ points, maxPossiblePoints }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let 
  return (
    <p className="result">
      You scored <strong>{points}</strong> out of {maxPossiblePoints}(
      {Math.ceil(percentage)}%)
    </p>
  );
}

export default FinishScreen;