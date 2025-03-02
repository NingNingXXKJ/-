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


  const addNumber = () => {
    const newNumber = Math.floor(Math.random() * 10) + 1;
    setNumbers([...numbers, newNumber]);
  };

  return (
    <div className="example-container">
      <h2>useMemo Hook Examples</h2>

      {/* Expensive calculation example */}
      <div style={complexStyles.container}>
        <h3>Memoized Calculation Example</h3>
        <div>
          <p>Numbers: {numbers.join(', ')}</p>
          <p>Multiplier: {multiplier}</p>
          <p>Calculated Result: {memoizedResult}</p>
          
          <button className="button" onClick={addNumber}>
            Add Random Number
          </button>
          <button 
            className="button"
            onClick={() => setMultiplier(m => m + 1)}
          >
            Increase Multiplier
          </button>
        </div>
      </div>

      {/* Theme switching example */}
      <div style={{ marginTop: '20px' }}>
        <h3>Memoized Styles Example</h3>
        <button 
          className="button"
          onClick={() => setDarkMode(prev => !prev)}
        >
          Toggle Theme
        </button>
        
        <div style={complexStyles.container}>
          {numbers.map((num, index) => (
            <span key={index} style={complexStyles.numberBox}>
              {num}
            </span>
          ))}
        </div>
      </div>

      {/* Explanation section */}
      <div>
        <h3>When to Use useMemo</h3>
        <ul>
          <li>Memoize expensive calculations</li>
          <li>Prevent unnecessary re-computations</li>
          <li>Optimize complex object references</li>
          <li>Improve performance in specific scenarios</li>
        </ul>
      </div>

      {/* Performance note */}
      <div>
        <h3>Performance Note</h3>
        <p>
          Open the console to see when the expensive calculation runs.
          Notice it only recalculates when numbers or multiplier changes!
        </p>
      </div>
    </div>
  );
};

export default UseMemoExample;
