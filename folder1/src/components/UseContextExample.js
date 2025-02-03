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
