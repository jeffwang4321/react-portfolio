import React, { useState} from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { work } from "./0-Data";
import ImageToggle from './ImageToggle';
import '../styles/5-WorkSection.css'

const WorkSection = () => {
  const [value, setValue] = useState(1); // Set to Rainforest (index 1)
  const {company, dates, duties, title, technologies, images} = work[value];

  return (
    <div id="work">
			<h2>Work</h2>
      <div className="jobs-center">
        <div className="btn-container">
          {work.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.header}
              </button>
            );
          })}
        </div>

        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"/>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>

      <div className="technologies">
        <h3>Technologies</h3>
        {technologies.map((technologies, index) => {
          return (
            <h4 key={index}>{technologies}</h4>
          );
        })}
			</div>
      {
        images.length > 0 ? <ImageToggle images={images}/> : null 
      }
    </div>
  );
};

export default WorkSection;
