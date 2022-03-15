import React from 'react';
import { useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, Name, Description, img } = service;
    const history = useHistory();
    
    const handleClick = () => {
        history.push(`/details/${id}`)
    }
    return (
        <div className='col-lg-4 col-md-6'>
            <div className="card" style={{ "width": "18rem;" }}>
                <img src={img} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{Name}</h5>
                    <p className="card-text">{Description}</p>
                    {/* <Link to={`/details/${id}`}><button className='btn-primary p-2'>Read More</button></Link> */}

                    <button className='btn-primary p-2' onClick={handleClick}>See More</button>
                </div>
                
            </div>

        </div>
    );
};

export default Service;