  const windowSize = useWindowSize();
  const [notes, setNotes] = useLocalStorage('notes', '');
  const nameInput = useFormInput('');
  const emailInput = useFormInput('');
  