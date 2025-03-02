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
