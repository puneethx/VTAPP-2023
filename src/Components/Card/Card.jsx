import React from 'react'
import Back from "./card.png"
import "./Card.scss";

const Card = ({ club,branch,title,cardImg }) => {
  return (
    <div className='card'>
      <div className="one">
        <img src={Back} alt="Loading.." className='img' />
        <span className='left'>{club}</span>
        <span className='right'>{branch}</span>
        <img src={cardImg} alt={title} className='cardImg'/>
        <span className='title'>{title}</span>
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