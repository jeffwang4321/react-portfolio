import React, { useState} from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { project } from "./0-Data";
import ImageToggle from './ImageToggle';
import { FaGithub } from 'react-icons/fa';
import '../styles/6-ProjectSection.css'

const allCategories = [...new Set(project.map((project) => project.header)), "All"];

const ProjectSection = () => {
  const [category, setCategory] = useState("Web Dev");


  const renderProjects = () => {
    let content = [];

    for(let index = 0; index < project.length; index++){
      if(project[index].header === category || category === "All"){
        content.push(
          <div key={index}>
            <div className="project-info">
              <a id="project-git_button" href={project[index].github} target="_"><FaGithub id='project-FaGithub'/><b>{project[index].title}</b></a>
              <br/>
              <br/>
              <h4 className="project-company_btn">{project[index].company}</h4>
              <p className="project-date">{project[index].dates}</p>
              {project[index].duties.map((duty, index) => {
                return (
                  <div key={index} className="project-desc">
                    <FaAngleDoubleRight className="project-icon"/>
                    <p>{duty}</p>
                  </div>
                );
              })}
            </div>
    
            <div className="technologies">
              <h3>Technologies</h3>
              {project[index].technologies.map((technologies, index) => {
                return (
                  <h4 key={index}>{technologies}</h4>
                );
              })}
            </div>

            {
              project[index].images.length > 0 ? <ImageToggle images={project[index].images}/> : null 
            }
            {
              project[index].video !== "" ? 
                <div className="iframeVideo">
                  <iframe style={{border: "1px solid rgba(0, 0, 0, 0.1)", background: "white"}} title={project[index].video} height="500vh" width="70%" src={project[index].video} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
              : null 
            }
          </div>
        );
      }
    }

    return content;
  };


  return (
    <div id="projects">
			<h2>Projects</h2>
      <div className="project-center">
        <div className="project-btn-container">
          {allCategories.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setCategory(item)}
                className={`project-btn ${item === category && "project-active-btn"}`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
      {
        renderProjects()
      }
    </div>
  );
};

export default ProjectSection;
