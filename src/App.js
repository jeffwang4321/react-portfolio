import React, { useState, useEffect } from "react";
import Navbar from "./components/1-Navbar";
import HomeSection from "./components/2-HomeSection";
import AboutSection from "./components/3-AboutSection";
import SkillsSection from "./components/4-SkillsSection";
import WorkSection from "./components/5-WorkSection";
import ProjectSection from "./components/6-ProjectSection";
import Footer from "./components/7-Footer";
import ImageToggle from "./components/ImageToggle";
import LoadingScreen from "./components/LoadingScreen";
import { workImages } from "./components/0-Data";
import { workSubtitles } from "./components/0-Data";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return loading ? (
    <LoadingScreen />
  ) : (
    <>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <ImageToggle images={workImages} subtitles={workSubtitles} />
      <ProjectSection />
      <Footer />
    </>
  );
}

export default App;
