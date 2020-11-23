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
                    <div className="entry">
                        <img id="figma_icon" src={Figma} alt="" />
                        <span className="entry_text">Figma</span>
                        </div>
                    <div className="entry">
                        <Photoshop />
                        <span className="entry_text">Photoshop Elements</span>
                        </div>
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
                        <span className="entry_text">Javascipt</span>
                    </div>
                    <div className="entry">
                        <Node />
                        <span className="entry_text">Node JS</span>
                    </div>
                    <div className="entry">
                        <Jquery />
                        <span className="entry_text">JQuery</span>
                    </div>
                    <div className="entry">
                        <Python />
                        <span className="entry_text">Python</span>
                    </div>
                </div>
                <div className="entry_left">
                    Frameworks:
                </div>
                <div className="entry_right icon_grid">
                    <div className="entry">
                        <ReactIcon />
                        <span className="entry_text">React</span>
                    </div>
                    <div className="entry">
                        <Vue />
                        <span className="entry_text">VueJS</span>
                    </div>
                    <div className="entry">
                        <Django />
                        <span className="entry_text">Django</span>
                    </div>
                </div>
                <div className="entry_left">
                    Styling:
                </div>
                <div className="entry_right icon_grid">
                    <div className="entry">
                        <Css />
                        <span className="entry_text">CSS</span>
                    </div>
                    <div className="entry">
                        <Sass />
                        <span className="entry_text">Sass</span>
                    </div>
                    <div className="entry">
                        <Bootstrap />
                        <span className="entry_text">Bootstrap</span>
                    </div>
                </div>
                <div className="entry_left">
                    Hosting:
                </div>
                <div className="entry_right icon_grid">
                    <div className="entry">
                        <Amazon />
                        <span className="entry_text">Amazon Web Services</span>
                    </div>
                    <div className="entry">
                        <Heroku />
                        <span className="entry_text">Heroku</span>
                    </div>
                </div>
                <div className="entry_left">
                    Databases:
                </div>
                <div className="entry_right icon_grid">
                    <div className="entry">
                        <Mongo />
                        <span className="entry_text">MongoDB</span>
                    </div>
                    <div className="entry">
                        <Postgres />
                        <span className="entry_text">PostgreSQL</span>
                    </div>
                    <div className="entry">
                        <Mysql />
                        <span className="entry_text">MySQL</span>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;