import React from 'react';
import { FaPython, FaPaintBrush } from 'react-icons/fa';
import { SiCplusplus, SiJavascript } from 'react-icons/si';

const SkillsSection = () => {
  return (
    <div className="skills">
    
      {/* <!--===== Profile Section =====--> */}
      <div className="column">
        <h2>Profile</h2>
        <ul className="info-list">
          <li>
            <strong>Full Name:</strong>
            <span> &#160; Jeff Wang</span>
          </li>
          <li>
            <strong>Education:</strong>
            <span> &#160; Simon Fraser University</span>
          </li>
          <li>
            <strong>Major:</strong>
            <span> &#160; Computing Science</span>
          </li>
          <li>
            <strong>Email:</strong>
            <span> &#160; <a href="mailto:jeffwang4321@gmail.com">jeffwang4321@gmail.com</a></span>
          </li>
        </ul> 
      </div>

      {/* <!--===== SKILLBAR Section =====--> */}
      <div className="column">
        <h2>Skills</h2>
        <ul className="skill-bars">
          <li>
            <div className="progress percent85"><span>Every Day</span></div>
            <FaPython id="icons"/>
            <strong>Python, NumPy, Pandas</strong>
          </li>
          <li>
            <div className="progress percent80"><span>Well Acquainted</span></div>
            <SiCplusplus id="icons"/>
            <strong>C, C++, C#</strong>
          </li>
          <li>
            <div className="progress percent90"><span>Love It</span></div>
            <SiJavascript id="icons2"/>
            <strong>JavaScript, HTML, CSS</strong>
          </li>
          <li>
            <div className="progress percent95"><span>Having Fun</span></div>
            <FaPaintBrush id="icons2"/>
            <strong>Graphic Design, Film Editing </strong>
          </li>
        </ul>	
      </div>
    </div>
  );
};

export default SkillsSection;
