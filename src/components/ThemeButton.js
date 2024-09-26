import React, { useState, useEffect } from "react";
import { RiSunFill } from "react-icons/ri";
import { FiMoon } from "react-icons/fi";
import "../styles/ThemeButton.css";

const ThemeButton = () => {
  const [theme, setTheme] = useState("light-theme");

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    theme === "light-theme"? <FiMoon className="theme-btn-icon" onClick={toggleTheme}/> :
    <RiSunFill className="theme-btn-icon" onClick={toggleTheme}/>
  );
};

export default ThemeButton;
