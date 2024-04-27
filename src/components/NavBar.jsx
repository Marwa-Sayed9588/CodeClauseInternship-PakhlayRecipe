/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import logo from '../Logo/Maza.png';


function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return(
        <>
            <header className="header">
                <img src={logo} alt="Logo" className="logo" />
                <div className="menu-icon" onClick={toggleMenu}>
                    <i className={isOpen ? "bx bx-x mobile-menu-icon" : "bx bx-menu mobile-menu-icon"}></i>
                </div>

                <nav className={isOpen ? "navbar active" : "navbar"}>
                    <a href="C:\Users\User\Desktop\Marwa\maza\src\App.js" className="navbar.anchor">Home</a>
                    <a href="src\components\About.jsx" className="navbar.anchor">About</a>
                    <a href="#" className="navbar.anchor">Contact</a>
                </nav>
            </header>
            <div className={isOpen ? "nav-bg active" : "nav-bg"}></div>
        </>
    )
}

export default NavBar;
