import React from "react";

function Question({ question }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options Question/>
    </div>
  );
}

export default Question;
