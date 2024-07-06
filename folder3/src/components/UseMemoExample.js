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
