import React from 'react'

const FinishScreen = ({pointsmaxPossiblePoints}) => {
const percentage={points/maxPossiblePoints}*100
  return (
    <P>
        You scored <strong>{points}</strong> out of {maxPossiblePoints}({Math.ceil(percentage)})
    </P>
  )
}

export default FinishScreen