  const handleCountIncrement = () => {
    setCount(c => c + 1);
  };

  return (
    <div className="example-container">
      <h2>useCallback Hook Examples</h2>

      {/* Counter section to trigger re-renders */}
      <div>
        <h3>Re-render Counter</h3>
        <p>Count: {count}</p>
        <button className="button" onClick={handleCountIncrement}>
          Increment Count
        </button>
        <p>
          Click this button to trigger re-renders. 
          Notice that ExpensiveComponent doesn't re-render!
        </p>
      </div>

      {/* Memoized callbacks section */}
      <div>
        <h3>Memoized Callbacks Example</h3>
        <p>Selected Items: {selectedItems.join(', ') || 'None'}</p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          {[1, 2, 3].map(id => (
            <ExpensiveComponent
              key={id}
              itemId={id}
              onItemClick={handleItemClick}
            />
          ))}
        </div>
      </div>

      {/* Explanation section */}
      <div>
        <h3>How useCallback Works Here</h3>
        <ul>
          <li>handleItemClick is memoized and doesn't change between renders</li>
          <li>ExpensiveComponent is wrapped in React.memo</li>
          <li>Incrementing count doesn't cause ExpensiveComponent to re-render</li>
          <li>Check the console to see when components actually render</li>
        </ul>
      </div>

      {/* Performance benefits section */}
      <div>
        <h3>Performance Benefits</h3>
        <p>useCallback is useful when:</p>
        <ul>
          <li>Passing callbacks to optimized child components</li>
          <li>Preventing unnecessary re-renders</li>
          <li>Maintaining referential equality between renders</li>
          <li>Working with hooks that depend on functions</li>
        </ul>
      </div>
    </div>
  );
};

export default UseCallbackExample;
