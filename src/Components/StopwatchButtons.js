import React from 'react'

const StopwatchButtons = (props) => {
    return (
        <div className='btn-container'>
            <button className='start' onClick={props.start}>START</button>
            <button className='stop' onClick={props.stop}>STOP</button>
            <button className='reset' onClick={props.reset}>RESET</button>
        </div>
    )
}

export default StopwatchButtons
