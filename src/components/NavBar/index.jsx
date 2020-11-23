import React, { useState } from 'react';
import './navbar.scss';

function NavBar() {

    const [navBarStatus, setNavBarStatus] = useState('');

    function toggleNavBar(e) {
        e.preventDefault();
        setNavBarStatus(navBarStatus === '' ? 'navbar_open' : '');
    };

    return (
        <div>
            <button onClick={toggleNavBar} className="burger nav_button">
                <div className="burger_bar"></div>
                <div className="burger_bar"></div>
                <div className="burger_bar"></div>
            </button>
            <nav className={`navbar ${navBarStatus}`}>
                <ul className="nav_list">
                    <li className="nav_item">
                        <div id="nav_close_btn" className="nav_link nav_button" onClick={toggleNavBar}>
                            <span className="link_text">
                                    X
                            </span>
                        </div>
                    </li>
                    <li className="nav_item">
                        <a className="nav_link" href="/">
                            <span className="link_text">
                                Home
                            </span>
                        </a>
                    </li>
                    <li className="nav_item">
                        <a className="nav_link" href="/portfolio">
                            <span className="link_text">
                                Portfolio
                            </span>
                        </a>
                    </li>
                    <li className="nav_item">
                        <a className="nav_link" href="/about">
                            <span className="link_text">
                                About
                            </span>
                        </a>
                    </li>
                    <li className="nav_item">
                        <a className="nav_link" href="/contact">
                            <span className="link_text">
                                Contact
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;