import React, { useState } from 'react';
import Bitmoji from './images/portfolio_bitmoji.png';
import './main.scss';

function Main() {

    const [isAnimated, setIsAnimated] = useState(false);

    function toggleLearnMore(e) {
        e.preventDefault();
        setIsAnimated(!isAnimated);
    }

    return (
        <div className="main">
            <div className="main_blurb">
                <div className="main_blurb_top">
                    <h2 className="main_blurb_top_item">
                        glad you could made it
                    </h2>
                    <div className="main_blurb_top_item decoration_circle"></div>
                    <div className="main_blurb_top_item decoration_circle"></div>
                    <div className="main_blurb_top_item decoration_circle"></div>
                </div>
                <h1 className="main_header">
                    HELLO
                </h1>
                <p className="arrow_block">
                    <button onClick={toggleLearnMore}
                        className={`arrow_btn nav_button ${isAnimated ? "arrow_btn_animated" : ""}`}>
                        <i className="fas fa-arrow-circle-right"></i>
                    </button>
                Learn More
                </p>
                <p className={`blurb_copy ${isAnimated ? "blurb_animated" : ""}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div>
                <div className="image_frame">
                    <img className="main_image" src={Bitmoji} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Main;