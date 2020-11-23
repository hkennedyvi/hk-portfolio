import React from 'react';
import './resume.scss';
import Amazon from './icons/amazon';
import Bootstrap from './icons/bootstrap';
import Css from './icons/css';
import Django from './icons/django';
import Figma from './icons/figma.png';
import Heroku from './icons/heroku';
import Html from './icons/html';
import Javascript from './icons/javascript';
import Jquery from './icons/jquery';
import Mongo from './icons/mongo';
import Mysql from './icons/mysql';
import Node from './icons/node';
import Photoshop from './icons/photoshop';
import Postgres from './icons/postgres';
import Python from './icons/python';
import ReactIcon from './icons/reacticon';
import Sass from './icons/sass';
import Vue from './icons/vue';
import Webpack from './icons/webpack';

function Resume() {
    return (
        <div className="about_container">
            <div className="resume_container">
                <h1 className="resume_header">resume</h1>
                <div className="entry_left">
                    Name:
                </div>
                <div className="entry_right">
                    Howard Kennedy
                </div>

                <div className="entry_left">
                    Education:
                </div>
                <div className="entry_right">
                    <div>PSU</div>
                    <div>U of O</div>
                </div>

                <div className="entry_left">
                    Design Tools:
                </div>
                <div className="entry_right icon_grid">
                    <div className="entry"><img id="figma_icon" src={Figma} alt="" />Figma</div>
                    <div className="entry"><Photoshop />Photoshop Elements</div>
                </div>
                <div className="entry_left">
                    Languages:
                </div>
                <div className="entry_right icon_grid">
                    <div className="entry">
                        <Html />
                        <span className="entry_text">HTML</span>
                    </div>
                    <div className="entry">
                        <Javascript />
                        <span>Javascipt</span>
                    </div>
                    <div className="entry">
                        <Node />
                        <span>Node JS</span>
                    </div>
                    <div className="entry">
                        <Jquery />
                        <span>JQuery</span>
                    </div>
                    <div className="entry">
                        <Python />
                        <span>Python</span>
                    </div>
                </div>
                <div className="entry_left">
                    Frameworks:
                </div>
                <div className="entry_right icon_grid">
                    <div className="entry">
                        <ReactIcon />
                        <span>React</span>
                    </div>
                    <div className="entry">
                        <Vue />
                        <span>VueJS</span>
                    </div>
                    <div className="entry">
                        <Django />
                        <span>Django</span>
                    </div>
                </div>
                <div className="entry_left">
                    Styling:
                </div>
                <div className="entry_right icon_grid">
                    <div className="entry">
                        <Css />
                        <span>CSS</span>
                    </div>
                    <div className="entry">
                        <Sass />
                        <span>Sass</span>
                    </div>
                    <div className="entry">
                        <Bootstrap />
                        <span>Bootstrap</span>
                    </div>
                </div>
                <div className="entry_left">
                    Hosting:
                </div>
                <div className="entry_right icon_grid">
                    <div className="entry">
                        <Amazon />
                        <span>Amazon Web Services</span>
                    </div>
                    <div className="entry">
                        <Heroku />
                        <span>Heroku</span>
                    </div>
                </div>
                <div className="entry_left">
                    Databases:
                </div>
                <div className="entry_right icon_grid">
                    <div className="entry">
                        <Mongo />
                        <span>MongoDB</span>
                    </div>
                    <div className="entry">
                        <Postgres />
                        <span>PostgreSQL</span>
                    </div>
                    <div className="entry">
                        <Mysql />
                        <span>MySQL</span>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;