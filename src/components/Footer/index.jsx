import React from 'react';
import './footer.scss';

function Footer() {
    return (
        <section className="footer">
            <div className="icon_container">
                <a href="https://github.com/hkennedyvi" rel="noreferrer" target="_blank">
                <i className="fab fa-github-square social_icon"></i>
                </a>
                <a href="https://www.linkedin.com/in/howard-kennedy/" rel="noreferrer" target="_blank">
                <i className="fab fa-linkedin social_icon"></i>
                </a>
            </div>
        </section>
    )
}

export default Footer;