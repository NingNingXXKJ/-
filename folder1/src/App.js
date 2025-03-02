function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>React Hooks Guide</h1>
          <Navigation />
        </header>
        
        <main className="content">
          <Routes>
            <Route path="/use-state" element={<UseStateExample />} />
            <Route path="/use-effect" element={<UseEffectExample />} />
            <Route path="/use-context" element={<UseContextExample />} />
            <Route path="/use-ref" element={<UseRefExample />} />
            <Route path="/use-callback" element={<UseCallbackExample />} />
            <Route path="/use-memo" element={<UseMemoExample />} />
            <Route path="/use-reducer" element={<UseReducerExample />} />
            <Route path="/custom-hook" element={<CustomHookExample />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
