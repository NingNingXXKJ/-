import React, { createContext, useContext, useState } from 'react';


const ThemeContext = createContext();


const UserContext = createContext();


const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');


  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'John Doe',
    preferences: {
      language: 'English',
      notifications: true
    }
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};


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
