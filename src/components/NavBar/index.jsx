import React, { useState } from 'react';
import './navbar.scss';

function NavBar() {

    const [navBarStatus, setNavBarStatus] = useState('navbar_closed');

    function toggleNavBar(e) {
        e.preventDefault();
        // setNavBarStatus(!navBarStatus);
        setNavBarStatus(navBarStatus === 'navbar_open' ? 'navbar_closed' : 'navbar_open');
    }

    return (
        <div>
            <button onClick={toggleNavBar} className="burger">
                <div className="burger_bar"></div>
                <div className="burger_bar"></div>
                <div className="burger_bar"></div>
            </button>
            <nav className={`navbar ${navBarStatus}`}>
                <ul className="nav_list">
                    <li className="nav_item">
                        <a className="nav_link" href="/">
                            <span className="link_text">
                                <button onClick={toggleNavBar}>
                                    X
                                </button>
                            </span>
                        </a>
                    </li>
                    <li className="nav_item">
                        <a className="nav_link" href="/">
                            <span className="link_text">
                                Home
                        </span>
                        </a>
                    </li>
                    <li className="nav_item">
                        <a className="nav_link" href="/">
                            <span className="link_text">
                                Home
                        </span>
                        </a>
                    </li>
                    <li className="nav_item">
                        <a className="nav_link" href="/">
                            <span className="link_text">
                                Home
                        </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;