import React, { createContext, useContext, useState } from 'react';


const ThemeContext = createContext();


const UserContext = createContext();


const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
