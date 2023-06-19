import React, { useState, useEffect } from 'react';


const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};


const useLocalStorage = (key, initialValue) => {

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });


  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};


const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
};


const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};


const CustomHookExample = () => {

  const windowSize = useWindowSize();
  const [notes, setNotes] = useLocalStorage('notes', '');
  const nameInput = useFormInput('');
  const emailInput = useFormInput('');
  

  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/todos/1'
  );

  return (
    <div className="example-container">
      <h2>Custom Hooks Examples</h2>

      {/* Window Size Hook Example */}
      <div>
        <h3>useWindowSize Hook</h3>
        <p>Window Width: {windowSize.width}px</p>
        <p>Window Height: {windowSize.height}px</p>
      </div>

      {/* Local Storage Hook Example */}
      <div>
        <h3>useLocalStorage Hook</h3>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="input-field"
          style={{ width: '100%', minHeight: '100px' }}
          placeholder="Type some notes (they'll persist in localStorage)"
        />
      </div>

      {/* Form Input Hook Example */}
      <div>
        <h3>useFormInput Hook</h3>
        <input
          {...nameInput}
          className="input-field"
          placeholder="Enter name"
        />
        <input
          {...emailInput}
          className="input-field"
          type="email"
          placeholder="Enter email"
        />
        <div>
          <p>Name: {nameInput.value}</p>
          <p>Email: {emailInput.value}</p>
        </div>
      </div>

      {/* Fetch Hook Example */}
      <div>
        <h3>useFetch Hook</h3>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        )}
      </div>

      {/* Custom Hooks Explanation */}
      <div>
        <h3>Benefits of Custom Hooks</h3>
        <ul>
          <li>Reuse stateful logic between components</li>
          <li>Keep components clean and focused</li>
          <li>Abstract complex logic into simple interfaces</li>
          <li>Share functionality across your application</li>
        </ul>
      </div>
    </div>
  );
};

export default CustomHookExample;
