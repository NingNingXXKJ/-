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
