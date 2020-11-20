import React from 'react';
import NavBar from '../components/NavBar';
import Projects from '../components/Projects';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';

function  Portfolio () {

    return (
        <div>
            <NavBar />
            <Projects />
            <SideBar />
            <Footer />
        </div>
    )
}

export default Portfolio;