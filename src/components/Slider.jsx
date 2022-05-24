import React, { memo, useState, useEffect} from "react";
import '../styles/Slider.css'

import Slide1 from './../img/top-5.jpeg'; 
import Slide2 from "./../img/top-6.jpeg";
import Slide3 from "./../img/top-7.webp";
import Slide4 from "./../img/top-8.jpeg";


function Slider() {
  const [slidId, setSlideStateID] = useState(0)
  const [slideSate, setSlideState] = useState(false);

  const images = [{id: 1, image: Slide1}, {id: 2, image: Slide2}, {id: 3, image: Slide3}, {id: 4,image: Slide4} ];

  useEffect(()=> {
    let timeoutId = setTimeout(() => {
      if(slidId < 3) {
        setSlideStateID((prev) => prev + 1)
      } else {
        setSlideStateID(0)
      }
    }, 6000)

    return () => {
      clearTimeout(timeoutId)
    }

  }, [slidId])

  return (
    <>
      <div className="container-slider">
      {images.map((slide, id) => <div onClick={() => setSlideStateID(id)} id={id} key={id} className={`${(slidId === id ) ? "active" : ''} slide`} style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover' }}></div>)}
      </div>
    </>
  );
}

export default memo(Slider);