import React, { useRef, useState, useEffect } from 'react';


const UseRefExample = () => {

  const inputRef = useRef(null);
  const countRef = useRef(0);
  const intervalRef = useRef(null);
  const [timer, setTimer] = useState(0);
  const [inputValue, setInputValue] = useState('');


  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);


  const focusInput = () => {
    inputRef.current.focus();
  };


  const startTimer = () => {
    if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);
  };


  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    countRef.current += 1;
  };

  return (
    <div className="example-container">
      <h2>useRef Hook Examples</h2>

      {/* DOM reference example */}
      <div>
        <h3>DOM Reference Example</h3>
        <input
          ref={inputRef}
          type="text"
          className="input-field"
          placeholder="Focus me!"
        />
        <button className="button" onClick={focusInput}>
          Focus Input
        </button>
      </div>

      {/* Mutable value example */}
      <div>
        <h3>Mutable Value Example</h3>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="input-field"
          placeholder="Type something..."
        />
        <p>Input has been changed {countRef.current} times</p>
        <p>Current value: {inputValue}</p>
      </div>

      {/* Timer example using ref */}
      <div>
        <h3>Timer Example</h3>
        <p>Timer: {timer} seconds</p>
        <button className="button" onClick={startTimer}>
          Start Timer
        </button>
        <button className="button" onClick={stopTimer}>
          Stop Timer
        </button>
        <p>
          This timer uses useRef to store the interval ID,
          preventing memory leaks on component unmount
        </p>
      </div>

      {/* Explanation section */}
      <div>
        <h3>Key Points About useRef</h3>
        <ul>
          <li>useRef values persist between renders</li>
          <li>Updating useRef doesn't trigger re-renders</li>
          <li>Commonly used for DOM element references</li>
          <li>Perfect for storing mutable values</li>
        </ul>
      </div>
    </div>
  );
};

export default UseRefExample;
