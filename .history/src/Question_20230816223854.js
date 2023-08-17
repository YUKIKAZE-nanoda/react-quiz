import React from "react";

function Question({ question }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        {question.option}
      </div>
    </div>
  );
}

export default Question;
