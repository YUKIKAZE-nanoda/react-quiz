import React from 'react'

const NextButton = ({dispatch,answer}) => {
    if(answer===null) return null;

    return <button>
        Next
    </button>
}

export default NextButton