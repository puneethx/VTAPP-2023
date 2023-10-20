import React from 'react'
import "./Events.scss"
import Card from '../Card/Card'
import { AiOutlineSearch } from "react-icons/ai"
import { cardData } from "../../cardData"

const Events = () => {
    const cards = cardData.map((card) => {
        return <Card key={card.id} {...card} />;
    });
    return (
        <div className='events'>
            <div className="filter">
                <div className='left'>
                    <button className="clubs">Clubs</button>
                    <button className="type">Type</button>
                    <button className="Day">Day</button>
                </div>
                <div className='search'><input type="text" /><AiOutlineSearch className='icon' /></div>
            </div>
            <div className='main'>
                <div className='allcards'>
                    {cards}
                </div>
            </div>
        </div>
    )
}

export default Events