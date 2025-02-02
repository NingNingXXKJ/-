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
