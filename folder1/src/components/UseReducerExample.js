  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch({ type: ACTIONS.ADD_TODO, payload: newTodo });
      setNewTodo('');
    }
  };
