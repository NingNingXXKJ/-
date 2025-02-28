  const handleAddItem = () => {
    if (text.trim() !== '') {
      setItems(prevItems => [...prevItems, text]);
      setText('');
    }
  };

  return (
    <div className="example-container">
      <h2>useState Hook Examples</h2>

      {/* Simple counter example */}
      <div>
        <h3>Counter Example</h3>
        <p>Count: {count}</p>
        <button className="button" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button className="button" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
      </div>

      {/* Array state example */}
      <div>
        <h3>Array State Example</h3>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="input-field"
          placeholder="Enter item"
        />
        <button className="button" onClick={handleAddItem}>
          Add Item
        </button>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Object state example */}
      <div>
        <h3>Form State Example</h3>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="input-field"
          placeholder="Enter name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="input-field"
          placeholder="Enter email"
        />
        <div>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UseStateExample;
