import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../img/logo.png';
import './Header.css';

const Header = () => {
    const { user, logout } = useAuth();

    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid container">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse justify-space-between navbar-collapse " id="navbarTogglerDemo01">
                            <Link className="navbar-brand" href="#">
                                <img src={logo} alt="logo" />
                            </Link>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to='/home'>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/about'>About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/services'>Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/doctors'>Doctors</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/bookings'>Appointments</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/login'>Login</Link>
                                </li>
                                <span className='ms-5 pt-2'> {user.displayName} </span>
                                {
                                    user?.displayName &&
                                    <button className='btn-danger rounded ms-5' onClick={logout}>Log out</button>
                                }

                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;