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
                    My name is Howard Kennedy. I'm a Full Stack Developer recently certified through University of Oregon.
                    Prior to web development, my background includes earning a business degree in advertising along 
                    with several years in the television industry.
                </p>
            </div>
            <div>
                <div className="image_frame">
                    <img className="main_image" src={Bitmoji} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Main;