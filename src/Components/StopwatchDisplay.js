import React from 'react'

const StopwatchDisplay = (props) => {
    return (
        <div className='stopwatch-display'>
            <span className='display'>{(props.time.h >= 10) ? props.time.h : "0" + props.time.h}&nbsp;:&nbsp;</span>
            <span className='display'>{(props.time.m >= 10) ? props.time.m : "0" + props.time.m}&nbsp;:&nbsp;</span>
            <span className='display'>{(props.time.s >= 10) ? props.time.s : "0" + props.time.s}&nbsp;:&nbsp;</span>
            <span className='display'>{(props.time.ms >= 10) ? props.time.ms : "0" + props.time.ms}</span>
        </div>
    )
}

export default StopwatchDisplay
