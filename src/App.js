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
  }
  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h
  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH })
  }
  const stop = () => {
    clearInterval(intervl)
    setStatus(1)
  }

  const reset = () => {
    clearInterval(intervl)
    setStatus(0)
    setTime({ ms: 0, s: 0, m: 0, h: 0 })
  }

  return (
    <div className="main-container">
      <div className="container">
        <StopwatchDisplay time={time} />
        <StopwatchButtons status={status} start={start} stop={stop} reset={reset} />

      </div>

    </div>
  );
}

export default App;
