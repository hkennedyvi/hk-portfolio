import React from 'react';
import NavBar from '../components/NavBar';
import Contact from '../components/Contact';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';

function  Home () {

    return (
        <div>
            <NavBar />
            <Contact />
            <SideBar />
            <Footer />
        </div>
    )
}

export default Home;