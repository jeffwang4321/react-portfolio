import React, { useState, useEffect } from "react";
import { RiSunFill } from "react-icons/ri";
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
    <button className="theme-btn" onClick={toggleTheme}>
      <RiSunFill className="theme-btn-icon" />
    </button>
  );
};

export default ThemeButton;
