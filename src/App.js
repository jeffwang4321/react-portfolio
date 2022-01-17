import React from 'react';
import Navbar from './components/1-Navbar';
import HomeSection from './components/2-HomeSection';
import AboutSection from './components/3-AboutSection';
import SkillsSection from './components/4-SkillsSection';
import WorkSection from './components/5-WorkSection';
import ProjectSection from './components/6-ProjectSection';
import Footer from './components/7-Footer';
import ThemeButton from './components/8-ThemeButton';
import ImageToggle from './components/ImageToggle';
import { workImages } from "./components/0-Data";

function App() {
  return (
    <>
      <Navbar/>   
      <HomeSection/>
      <AboutSection/>
      <SkillsSection/>
      <WorkSection/>
      <ImageToggle images={workImages}/>
      <ProjectSection/>
      <Footer/>
      <ThemeButton/>
    </>
  );
}

export default App;
