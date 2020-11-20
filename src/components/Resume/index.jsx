import React from 'react';
import './resume.scss';
import Amazon from './icons/amazon';
import Bootstrap from './icons/bootstrap';
import Django from './icons/django';
import Handlebars from './icons/handlebars';
import Heroku from './icons/heroku';
import Jquery from './icons/jquery';
import Mongo from './icons/mongo';
import Mysql from './icons/mysql';
import Node from './icons/node';
import Npm from './icons/npm';
import Postgres from './icons/postgres';
import Python from './icons/python';
import ReactIcon from './icons/reacticon';
import Sass from './icons/sass';
import Vue from './icons/vue';
import Yarn from './icons/yarn';
import Webpack from './icons/webpack';

function Resume() {
    return (
        <div className="about_container">
            <div className="resume_container">

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
                    Languages:
                </div>
                <div className="entry_right">
                    <ReactIcon />
                    <Django />
                    <Sass />
                    <Python />
                    <Amazon />
                    <Bootstrap />
                    <Vue />
                    <Npm />
                    <Mongo />
                    <Yarn />
                    <Handlebars />
                    <Postgres />
                    <Heroku />
                    <Jquery />
                    <Mysql />
                    <Node />
                    <Webpack />
                </div>

            </div>
       RESUME
        </div>
    )
}

export default Resume;