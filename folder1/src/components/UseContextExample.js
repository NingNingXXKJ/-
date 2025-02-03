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
