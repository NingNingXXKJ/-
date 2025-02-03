const ThemedButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button 
      className="button"
      onClick={toggleTheme}
      style={{ 
        backgroundColor: theme === 'light' ? '#61dafb' : '#282c34',
        color: theme === 'light' ? 'black' : 'white'
      }}
    >
      Toggle Theme
    </button>
  );
};
