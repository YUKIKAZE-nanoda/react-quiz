import React from 'react'

function FinishScreen ({points,maxPossiblePoints}) => {
    
  return (
    <P>
        You scored <strong>{points}</strong> out of {maxPossiblePoints}({Math.ceil(percentage)})
    </P>
  )
}

export default FinishScreen