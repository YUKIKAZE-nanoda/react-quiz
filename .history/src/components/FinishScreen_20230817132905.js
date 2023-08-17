import React from "react";

function FinishScreen({ points, maxPossiblePoints }) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
      You scored <strong>{points}</strong> out of {maxPossiblePoints}(
      {Math.ceil(percentage)})
    </PerformanceObserverEntryList>
  );
}

export default FinishScreen;
