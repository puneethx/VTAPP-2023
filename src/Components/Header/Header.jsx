import React,{useState} from 'react';
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {

    const [activeItem, setActiveItem] = useState("Events");

    const handleItemClick = (item) => {
        setActiveItem(item);
    };


    return (
        <div className='header'>
            <div className="topbar">
                {/* <img src={HeadLogo} alt="" className='logo' /> */}
                <h1>vTAPP 2023</h1>
            </div>
            <div className="navbar">
                <ul>
                    <Link to="/" className={`link ${activeItem === "Events" && "active"}`} 
                    onClick={() => handleItemClick("Events")}>
                        <li>
                            Events
                            <div className='box'></div>
                            
                        </li>
                    </Link>
                    <Link to="/Food&Beverages" className={`link ${activeItem === "Food" && "active"}`} 
                    onClick={() => handleItemClick("Food")}>
                        <li>
                            Food & Beverages
                            <div className='box'></div>
                        </li>
                    </Link>
                    <Link to="/Schedule" className={`link ${activeItem === "Schedule" && "active"}`} 
                    onClick={() => handleItemClick("Schedule")}>
                        <li>
                            Schedule
                            <div className='box'></div>
                        </li>
                    </Link>
                    <Link to="/About" className={`link ${activeItem === "About" && "active"}`} 
                    onClick={() => handleItemClick("About")}>
                        <li>
                            About
                            <div className='box'></div>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Header