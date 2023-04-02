import React, { useState, useEffect } from 'react';

function Pomodoro() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [cyclesCompleted, setCyclesCompleted] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes !== 0 ) {
            setMinutes(minutes - 1);
            setSeconds(59);
          } else if(minutes === 0 && cyclesCompleted % 2 === 0) {
            alert('BREAK');
            setMinutes((5));
            setCyclesCompleted(cyclesCompleted + 1);
          } else if(minutes === 0  && cyclesCompleted !== 0){
            setMinutes(25);
            setCyclesCompleted(cyclesCompleted + 1);
            alert("Time to work");
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds, cyclesCompleted]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setMinutes(25);
    setSeconds(0);
    setCyclesCompleted(0);
  };

  const isWorkTime = cyclesCompleted % 2 === 0;

  return (
    <section className='background-image'>
      <div className='pomodoro'>
        <h1 className='titre'>Pomodoro Timer</h1>

        <div className='horloge'>
          <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
          <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
        </div>

        <div className='button-container'>
          <button type='button' onClick={startTimer} disabled={isRunning}>
            Start
          </button>
          <button type='button' onClick={stopTimer} disabled={!isRunning}>
            Stop
          </button>
          <button type='button' onClick={resetTimer}>
            Reset
          </button>
        </div>

        {cyclesCompleted > 0 && (
          <div className='status-container'>
            <p>{isWorkTime ? 'Work' : 'Break'} time</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Pomodoro;
