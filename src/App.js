import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import SkillsSection from './components/SkillsSection';
import WorkPage from './components/WorkPage';
import ProjectPage from './components/ProjectPage';
import FooterSection from './components/FooterSection';
import { RiSunFill } from 'react-icons/ri';

function App() {
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
    <>
      <Navbar/>   
      <HomePage/>
      <button className="theme-btn" onClick={toggleTheme}>
        <RiSunFill/>
      </button>
      <AboutPage/>
      <SkillsSection/>
      <WorkPage/>
      <ProjectPage/>
      <FooterSection/>
    </>
  );
}

export default App;
