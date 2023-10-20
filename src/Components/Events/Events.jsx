import React, { useState } from 'react'
import "./Events.scss"
import Card from '../Card/Card'
import { AiOutlineSearch } from "react-icons/ai"
import { cardData } from "../../cardData"

const Events = () => {
    const cards = cardData.map((card) => {
        return <Card key={card.id} {...card} />;
    });

    const [selectedClub, setSelectedClub] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const [selectedDay, setSelectedDay] = useState("");

    const handleSelectChange = (event) => {
        setSelectedClub(event.target.value);
        setSelectedType(event.target.value);
        setSelectedDay(event.target.value);
    };


    return (
        <div className='events'>
            <div className="filter">
                <div className='left'>
                    <div className="selector">
                        <select value={selectedClub} onChange={handleSelectChange} className='select'>
                            <option value="" disabled>
                                Clubs
                            </option>
                            <option value="CSI">CSI</option>
                            <option value="ML">ML</option>
                            <option value="NGC">NGC</option>
                            <option value="GOOGLE">GOOGLE</option>
                            <option value="XYZ">XYZ</option>
                        </select>
                    </div>
                    <div className="selector">
                        <select value={selectedType} onChange={handleSelectChange} className='select'>
                            <option value="" disabled>
                                Types
                            </option>
                            <option value="CODING">CODING</option>
                            <option value="DEBATE">DEBATE</option>
                            <option value="ORIENTATION">ORIENTATION</option>
                        </select>
                    </div>
                    <div className="selector">
                        <select value={selectedDay} onChange={handleSelectChange} className='select'>
                            <option value="" disabled>
                                Day
                            </option>
                            <option value="9TH">9TH DEC</option>
                            <option value="10TH">10TH DEC</option>
                        </select>
                    </div>
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