import React from 'react';
import NavBar from '../components/NavBar';
import Main from '../components/Main';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';

function  Home () {

    return (
        <div>
            <NavBar />
            <Main />
            <SideBar />
            <Footer />
        </div>
    )
}

export default Home;