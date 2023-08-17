import React from 'react'

function FinishScreen ({points,maxPossiblePoints}){
    
  return (
    <p>
        You scored <strong>{points}</strong> out of {maxPossiblePoints}({Math.ceil(percentage)})
    </p>
  );
}

export default FinishScreen;