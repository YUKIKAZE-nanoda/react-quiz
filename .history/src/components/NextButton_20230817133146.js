import React from "react";

const NextButton = ({ dispatch, answer }) => {
  if (answer === null) return null;

  if (index <num)return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
};

export default NextButton;
