import 'react-slideshow-image/dist/styles.css'

import React, { useContext } from 'react';
import { Slide } from 'react-slideshow-image';
import { SlideContext } from '../contexts/SlideContext';


const Slideshow = () => {

    const {SlideList} = useContext(SlideContext);
    return (
      <div className="slide-box">
        <Slide easing="ease">
          {SlideList.map((slide)=>
          <div className="each-slide" key={slide.id}>
            <div style={{'backgroundImage': `url(${slide.url})`}}>
            </div>
          </div>)}
        </Slide>
      </div>
    )
};

export default Slideshow;