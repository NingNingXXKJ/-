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
