import React from 'react';
import about from '../../img/about-bg.png';
import author from '../../img/author-image.jpg';

import './About.css';

const About = () => {
    return (
        <div className='bg-light'>
            <div className='container'>
                <h3 className='pt-5' style={{ fontFamily: "roboto", fontWeight: "bold" }}>About Us</h3>
                <div className="row align-items-center mt-5 g-3">
                    <div className="col-lg-6 pb-4">
                        <h1 >Welcome to Your Health Lab</h1>
                        <p className='lh-lg text-wrap'>Health Lab has major campuses in Rochester, Minn.; Scottsdale and Phoenix, Ariz.; and Jacksonville, Fla. The Health Lab Health System has dozens of locations in several states. </p>
                        <p className='lh-lg text-wrap'>Thousands of patients from around the world travel to Health Lab locations, and Health Lab's International Patient Offices help ensure that distance and language are not obstacles to receiving world-class care.</p>


                        <div className='d-flex'>
                            <img src={author} alt="author" style={{ width: "70px", borderRadius: "100px" }} />
                            <div>
                                <span className='fs-4 fw-bold ms-3'>Dr. Neil Jackson</span><br />
                                <span>General Principal</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={about} alt="about-img" className='w-100' />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;