import { useState } from 'react';
import './App.css';
import StopwatchButtons from './Components/StopwatchButtons';
import StopwatchDisplay from './Components/StopwatchDisplay';

function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 })
  const [intervl, setIntervl] = useState()
  const [status, setStatus] = useState(0)

  const start = () => {
    run()
    setIntervl(setInterval(run, 10))
    setStatus(1)
  }
  let updatedMilliSec = time.ms
  let updatedSec = time.s
  let updatedMin = time.m
  let updatedHrs = time.h
  const run = () => {
    if (updatedMin === 60) {
      updatedHrs++;
      updatedMin = 0;
    }
    if (updatedSec === 60) {
      updatedMin++;
      updatedSec = 0;
    }
    if (updatedMilliSec === 100) {
      updatedSec++;
      updatedMilliSec = 0;
    }
    updatedMilliSec++;
    return setTime({ ms: updatedMilliSec, s: updatedSec, m: updatedMin, h: updatedHrs })
  }
  const stop = () => {
    clearInterval(intervl)
    setStatus(2)
  }

  const reset = () => {
    clearInterval(intervl)
    setTime({ ms: 0, s: 0, m: 0, h: 0 })
    setStatus(0)
  }

  const resume = () => {
    run()
    setIntervl(setInterval(run, 10))
    setStatus(1)
  }

  return (
    <div className="main-container">
      <div className="container">
        <h1 className='heading'>My Stopwatch !</h1>
        <StopwatchDisplay time={time} />
        <StopwatchButtons status={status} start={start} stop={stop} reset={reset} resume={resume} />
      </div>
    </div>
  );
}

export default App;
