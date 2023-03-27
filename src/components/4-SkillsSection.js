import React from "react";
import { FaPython, FaNodeJs } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { BiPencil } from "react-icons/bi";
import "../styles/4-SkillsSection.css";

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
            <strong>Major:</strong>
            <span> &#160; Computer Science</span>
          </li>
          <li>
            <strong>Education:</strong>
            <span> &#160; Simon Fraser University</span>
          </li>
          <li>
            <strong>Email:</strong>
            <span>
              {" "}&#160;{" "}
              <a href="mailto:jeffwang4321@gmail.com">jeffwang4321@gmail.com</a>
            </span>
          </li>
        </ul>
      </div>

      {/* <!--===== SKILLBAR Section =====--> */}
      <div className="column">
        <h2>Skills</h2>
        <ul className="skill-bars">
          <li>
            <div className="progress percent1">
              <span>Every Day</span>
            </div>
            <FaPython id="icons" />
            <strong>Python, NumPy, Pandas</strong>
          </li>
          <li>
            <div className="progress percent2">
              <span>Well Acquainted</span>
            </div>
            <SiCplusplus id="icons" />
            <strong>C, C++, C#</strong>
          </li>
          <li>
            <div className="progress percent3">
              <span>Love It</span>
            </div>
            <FaNodeJs id="icons" />
            <strong>JavaScript, Node.js, React</strong>
          </li>
          <li>
            <div className="progress percent4">
              <span>Having Fun</span>
            </div>
            <BiPencil id="icons" />
            <strong>UX/UI Design, Film Editing </strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SkillsSection;
