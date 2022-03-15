import React from 'react';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <About></About>
            <Services></Services>
            <Doctors></Doctors>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;