import React from 'react';
import team1 from '../../img/team-image1.jpg'
import team2 from '../../img/team-image2.jpg'
import team3 from '../../img/team-image3.jpg'

const Doctors = () => {
    return (
        <div>
            <div className='container pt-5'>
            <h3 style={{ fontFamily: "roboto", fontWeight: "bold" }}>Our Doctors</h3>
                <div class="row row-cols-1 row-cols-lg-3 g-4 pt-5">
                    <div class="col">
                        <div class="card h-100">
                            <img src={team1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Nate Baston</h5>
                                <p class="card-text">General Principal</p>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src={team2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Jason Stewart</h5>
                                <p class="card-text">Pregnancy</p>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src={team3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Miasha Nakahara</h5>
                                <p class="card-text">Cardiology</p>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;