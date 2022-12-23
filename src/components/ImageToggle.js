import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaAngleDoubleRight,
} from "react-icons/fa";
import "../styles/ImageToggle.css";

const ImageToggle = (props) => {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    let newIndex = index + 1;
    if (newIndex > props.images.length - 1) {
      newIndex = 0;
    }
    setIndex(newIndex);
  };

  const prevImage = () => {
    let newIndex = index - 1;
    if (newIndex < 0) {
      newIndex = props.images.length - 1;
    }
    setIndex(newIndex);
  };

  return (
    <article className="imageToggle" id="sample">
      <button className="prev-btn" onClick={prevImage}>
        <FaChevronLeft />
      </button>
      <button className="next-btn" onClick={nextImage}>
        <FaChevronRight />
      </button>
      <div className="img-container">
        <img
          src={props.images[index]}
          alt={""}
          className="work-img"
          onClick={nextImage}
        />
        {props.subtitles.length > 0 ? (
          <p className="img-subtitle">
            <FaAngleDoubleRight className="job-icon" />
            {props.subtitles[index]}
          </p>
        ) : null}
      </div>
    </article>
  );
};

export default ImageToggle;
