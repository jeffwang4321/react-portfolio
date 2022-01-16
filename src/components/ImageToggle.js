import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ImageToggle = (props) => {
  const [index, setIndex] = useState(0);

  const nextPerson = () => {
    let newIndex = index + 1;
    if (newIndex > props.images.length - 1) {
      newIndex = 0
    }
    setIndex(newIndex);
  };

  const prevPerson = () => {
    let newIndex = index - 1
      if (newIndex < 0) {
        newIndex = props.images.length - 1
      }
    setIndex(newIndex);
  };

  return (
    <article className='imageToggle'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
        <div className='img-container'>
          <img src={props.images[index]} alt={""} className='person-img' onClick={nextPerson}/>
        </div>
    </article>
  );
};

export default ImageToggle;
