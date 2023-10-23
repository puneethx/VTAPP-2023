import React from 'react';
import Back from "./card.png"
import useSound from 'use-sound';
// import ringer from "./flipdish-ringer.mp3";
import hoverSound from './assets/hover.mp3';
import clickSound from "./assets/click.mp3";
import "./Card.scss";

const Card = ({ club, branch, title, cardImg, description }) => {
  const [hoverPlay] = useSound(hoverSound);
  const [clickPlay] = useSound(clickSound);
  return (
    <div className='card' onMouseEnter={hoverPlay} onClick={clickPlay}>
      <div className="one">
        <img src={Back} alt="Loading.." className='img' />
        <span className='left'>{club}</span>
        <span className='right'>{branch}</span>
        <div className='centerImg'>
          <img src={cardImg} alt={title} className='cardImg' />
        </div>
        <span className='title'>{title}</span>
        <span className='description'>{title}:{description}</span>
        <div className='load'>
          <div className="l1"></div>
          <div className="l2"></div>
          <div className="l3"></div>
          <div className="l4"></div>
          <div className="l5"></div>
          <div className="l6"></div>
        </div>
      </div>
    </div>
  )
}

export default Card