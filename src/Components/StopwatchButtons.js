import React from 'react'

const StopwatchButtons = ({ status, start, stop, reset, resume }) => {
    return (
        <div className='btn-container'>
            <button className='start' onClick={start} disabled={status === 0 ? false : true}>START</button>
            {status === 1 || status === 0 ? (
                <button className='stop' onClick={stop} disabled={status === 0 ? true : false}>STOP</button>
            ) : (
                <button className='resume' onClick={resume}>RESUME</button>

            )}
            <button className='reset' onClick={reset}>RESET</button>
        </div>
    )
}

export default StopwatchButtons
