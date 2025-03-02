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


const UserProfile = () => {
  const { user, setUser } = useContext(UserContext);
  

  const toggleNotifications = () => {
    setUser(prevUser => ({
      ...prevUser,
      preferences: {
        ...prevUser.preferences,
        notifications: !prevUser.preferences.notifications
      }
    }));
  };

  return (
    <div>
      <h3>User Profile</h3>
      <p>Name: {user.name}</p>
      <p>Language: {user.preferences.language}</p>
      <p>Notifications: {user.preferences.notifications ? 'Enabled' : 'Disabled'}</p>
      <button className="button" onClick={toggleNotifications}>
        Toggle Notifications
      </button>
    </div>
  );
};


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


const ContextConsumer = () => {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <p>Current User: {user.name}</p>
      <p>This component accesses both Theme and User contexts!</p>
    </div>
  );
};

export default UseContextExample;
