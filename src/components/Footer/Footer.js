import React from 'react';
import logo from '../../img/logo.png'

const Footer = () => {
    return (
        <div className='bg-dark pt-5 mt-5 text-light'>
            <div className="row g-5">
                <div className="col-12 col-md-6 col-lg-4">
                    <img src={logo} alt="" />
                    <br /><br />
                    <h5>Get in Touch</h5>
                    <p>info@mail.com</p>
                    <p>+00 1122 3344 5566</p>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <h4>Blogs</h4>
                    <p>CDC Advises N95s as Best Masks <br /> Against Coronavirus</p>
                    <p>You Don't Have to Be a Smoker <br /> to Get Lung Cancer</p>
                    <p>Skipping COVID Vaccine in Pregnancy <br /> Brings Big Risks to Mothers, Babies</p>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <h4>Opening Hours</h4>
                    <p>Monday - Friday 06:00 AM - 10:00 PM</p>
                    <p>Saturday 09:00 AM - 08:00 PM</p>
                    <p>Sunday Closed</p>
                    <div>
                        <i className="fab fa-facebook fa-2x m-2"></i>
                        <i className="fab fa-twitter fa-2x m-2"></i>
                        <i className="fab fa-google fa-2x m-2"></i>
                        <i className="fab fa-linkedin-in fa-2x m-2"></i>
                    </div>
                </div>
              
            </div>
            <p className="text-center  p-4">© copyrights 2021. All rights reserved by Health Lab</p>
        </div>
    );
};

export default Footer;