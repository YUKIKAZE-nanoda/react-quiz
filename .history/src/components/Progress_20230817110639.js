import React from "react";

const Progress = ({ index, numQuestions, points, maxPossiblePoints,answer }) => {
  return (
    <header className="progress">
    <progress max={numQuestions} value={index+Number(answer 1==null)}/>
      <p>
        Question <strong>{index + 1}</strong> /{numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
};

export default Progress;
