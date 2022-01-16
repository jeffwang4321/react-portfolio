import React, { useState, useEffect } from 'react';
import { RiSunFill } from 'react-icons/ri';

const ThemeButton = () => {
  const [theme, setTheme] = useState('light-theme');

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };
  
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <button className="theme-btn" onClick={toggleTheme}>
      <RiSunFill/>
    </button>
  );
}

export default ThemeButton;
