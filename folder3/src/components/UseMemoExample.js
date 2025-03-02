import React, { useState, useMemo } from 'react';


const UseMemoExample = () => {

  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [multiplier, setMultiplier] = useState(1);
  const [darkMode, setDarkMode] = useState(false);


  const expensiveCalculation = (nums) => {
    console.log('Performing expensive calculation...');
    return nums.reduce((acc, curr) => {
      // Simulate complex calculation
      let result = acc;
      for (let i = 0; i < 1000000; i++) {
        result += curr * multiplier;
      }
      return result;
    }, 0);
  };


  const memoizedResult = useMemo(() => {
    return expensiveCalculation(numbers);
  }, [numbers, multiplier]);


  const complexStyles = useMemo(() => ({
    container: {
      backgroundColor: darkMode ? '#333' : '#fff',
      color: darkMode ? '#fff' : '#333',
      transition: 'all 0.3s ease',
      padding: '20px',
      borderRadius: '8px',
    },
    numberBox: {
      border: `1px solid ${darkMode ? '#fff' : '#333'}`,
      padding: '10px',
      margin: '5px',
      display: 'inline-block',
    }
  }), [darkMode]);
