import React from 'react'

const StopwatchButtons = (props) => {
    return (
        <div className='btn-container'>
            <button className='start' onClick={props.start}>Start</button>
            <button className='stop' onClick={props.stop}>Stop</button>
            <button className='reset' onClick={props.reset}>Reset</button>
        </div>
    )
}

export default StopwatchButtons
