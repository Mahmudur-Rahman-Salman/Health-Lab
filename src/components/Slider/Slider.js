import React from 'react';
import slider1 from '../../img/slider1.jpg';
import slider2 from '../../img/slider2.jpg';
import slider3 from '../../img/slider3.jpg';

const Slider = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={slider1} class="d-block w-100" alt="slider-img" />
                        <div class="carousel-caption d-none d-md-block text-dark">
                            <p>LET'S MAKE YOUR LIFE HAPPIER</p>
                            <h1>Healthy Leaving</h1>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={slider2} class="d-block w-100" alt="slider-img" />
                        <div class="carousel-caption d-none d-md-block text-dark">
                            <p>WE ARE EXPERTS</p>
                            <h1>Your Health Benifits</h1>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={slider3} class="d-block w-100" alt="slider-img" />
                        <div class="carousel-caption d-none d-md-block text-dark">
                            <p>WE CARE YOUR HEALTH</p>
                            <h1>New Lifestyle</h1>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Slider;