import React from 'react';
import { FaGithub } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div id="home">
      <img src={'./assets/jw.jpg'} alt="headshot" />
      <h4>Jeff Wang</h4>
      <p>Computer Science Undergraduate @ Simon Fraser University</p> 
      <div id="home_buttons">
        <a id="resume_button" href={'./assets/Resume.pdf'} target="_"><b>Resume</b></a>
        <a id="git_button" href="https://github.com/jeffwang4321" target="_"><FaGithub id='FaGithub'/><b>GitHub</b></a>
      </div>
    </div>
  );
};

export default HomePage;
