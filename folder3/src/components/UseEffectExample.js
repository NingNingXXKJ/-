import React, { useState, useEffect } from 'react';


const UseEffectExample = () => {

  const [count, setCount] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    document.title = `Count is ${count}`;
  });


  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Simulating API call
        const response = await new Promise(resolve => 
          setTimeout(() => resolve({ data: 'Sample API Response' }), 1500)
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="example-container">
      <h2>useEffect Hook Examples</h2>

      {/* Title update example */}
      <div>
        <h3>Title Update Example</h3>
        <p>Count: {count}</p>
        <button className="button" onClick={() => setCount(count + 1)}>
          Increment Count
        </button>
        <p>Check the page title - it updates with the count!</p>
      </div>

      {/* Window width example */}
      <div>
        <h3>Window Width Example</h3>
        <p>Current window width: {windowWidth}px</p>
        <p>Resize your browser window to see it update!</p>
      </div>

      {/* API call example */}
      <div>
        <h3>API Call Example</h3>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>Data from API: {data}</p>
            <p>This data was loaded using useEffect!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UseEffectExample;
