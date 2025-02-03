const UseContextExample = () => {
  return (
    <div className="example-container">
      <h2>useContext Hook Examples</h2>
      
      <ThemeProvider>
        <UserProvider>
          <div>
            <h3>Theme Example</h3>
            <ThemedButton />
          </div>

          <div style={{ marginTop: '20px' }}>
            <UserProfile />
          </div>

          <div style={{ marginTop: '20px' }}>
            <h3>Accessing Multiple Contexts</h3>
            <ContextConsumer />
          </div>
        </UserProvider>
      </ThemeProvider>
    </div>
  );
};
