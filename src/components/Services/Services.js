import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {

        fetch('./data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='container pt-5'>
            <h3 style={{ fontFamily: "roboto", fontWeight: "bold" }}>Services</h3>
            <div className='row g-5 pt-5'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;