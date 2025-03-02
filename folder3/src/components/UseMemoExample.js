import React, { useState, useMemo } from 'react';


const UseMemoExample = () => {

  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [multiplier, setMultiplier] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
