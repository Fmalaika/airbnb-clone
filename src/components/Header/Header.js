import React from 'react'
import './Header.css';

function Header() {
    return (
        <div className="header">
            <img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" alt="logo" />
            <div className="header__center">
                <input type="text"/>
                <SearchIcon />
            </div>
        </div>
    )
}

export default Header
