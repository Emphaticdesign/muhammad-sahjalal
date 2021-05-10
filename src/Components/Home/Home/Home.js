import React from 'react';
import About from '../../AboutMain/About/About';
import Contact from '../../Contact/Contact/Contact';
import Footer from '../../Footer/Footer/Footer';
import Project from '../../Project/Project/Project';
import HomeHeader from '../HomeHeader/HomeHeader';

const Home = () => {
    return (
        <div>
            <HomeHeader></HomeHeader>
            <About></About>
            <Project></Project>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;