import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaAngleDoubleRight,
} from "react-icons/fa";
import "../styles/ImageToggle.css";
import { imageToggles } from "./0-Data";

const ImageToggle = () => {
  const [index, setIndex] = useState(0);
  const { title, src, subtitle} = imageToggles[index];

  const nextImage = () => {
    let newIndex = index + 1;
    if (newIndex > imageToggles.length - 1) {
      newIndex = 0;
    }
    setIndex(newIndex);
  };

  const prevImage = () => {
    let newIndex = index - 1;
    if (newIndex < 0) {
      newIndex = imageToggles.length - 1;
    }
    setIndex(newIndex);
  };

  return (
    <article className="imageToggle" id="sample">
      <div className="img-btn-container">
          <button className="prev-btn" onClick={prevImage}>
            <FaChevronLeft />
          </button>
          <h3>{title}</h3>
          <button className="next-btn" onClick={nextImage}>
            <FaChevronRight />
          </button>
        </div>
      <div className="img-container">    
        <img
          src={src}
          alt={""}
          className="work-img"
          onClick={nextImage}
        />
        {imageToggles.length > 0 ? (
          <p className="img-subtitle">
            <FaAngleDoubleRight className="job-icon" />
            {subtitle}
          </p>
        ) : null}
      </div>
    </article>
  );
};

export default ImageToggle;
