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
