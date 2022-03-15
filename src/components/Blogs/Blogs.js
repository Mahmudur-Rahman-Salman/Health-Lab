import React from 'react';
import blog1 from '../../img/news-image1.jpg'
import blog2 from '../../img/news-image2.jpg'
import blog3 from '../../img/news-image3.jpg'

const Blogs = () => {
    return (
        <div>
            <div className='container pt-5 pb-5'>
                <h3 style={{ fontFamily: "roboto", fontWeight: "bold" }}>Blogs</h3>
                <div class="row row-cols-1 row-cols-lg-3 g-4 pt-5">
                    <div class="col">
                        <div class="card h-100">
                            <img src={blog1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h4 class="card-title">Skipping COVID Vaccine in Pregnancy Brings Big Risks to Mothers, Babies</h4>
                                <p class="card-text">Unvaccinated pregnant women are putting themselves and their baby at risk for serious complications of COVID-19, according to new research out of Scotland.</p>
                                <button type="button" class="btn btn-primary">Read More</button>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src={blog2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h4 class="card-title">CDC Advises N95s as Best Masks Against Coronavirus</h4>
                                <p class="card-text">In a departure from its prior advice on face masks, new guidance from the Centers for Disease Control and Prevention urges properly fitted N95 or KN95 masks as the best protection against COVID-19, rather than cloth masks.</p>
                                <button type="button" class="btn btn-primary">Read More</button>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src={blog3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h4 class="card-title">You Don't Have to Be a Smoker to Get Lung Cancer</h4>
                                <p class="card-text">Think you're safe from lung cancer because you've never smoked? Think again.While cigarette smoking is the main cause of lung cancer, it's possible to get the disease without ever lighting up.</p>
                                <button type="button" class="btn btn-primary">Read More</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;