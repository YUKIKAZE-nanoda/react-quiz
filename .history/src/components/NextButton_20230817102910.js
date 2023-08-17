import React from 'react'

const NextButton = ({dispatch,answer}) => {
    if(answer===null) return null;

    return <button
    className=''
    >
        Next
    </button>
}

export default NextButton