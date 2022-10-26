import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/Header.css';
import {decodeToken, isExpired} from "react-jwt";

const Header = () => {

    const isNotLogged = isExpired(localStorage.getItem('token'));
        return (
            <header>
                <nav>
                    <div className='logo'><Link to='/' className='link'>Home
                    </Link></div>
                    <div >
                        <div className='logo1'>
                            <ul>
                            {!isNotLogged && <li>
                                <Link to ="/add" className='link'>Add film</Link>
                            </li>}
                            {isNotLogged && <li>
                                <Link to="/signin" className='link' >Login</Link>
                            </li>}
                            {isNotLogged && <li>
                                <Link to="/signup" className='link'>SignUp</Link>
                            </li>}
                            {!isNotLogged && <li >
                                <a href="/" className='link' onClick={() => localStorage.removeItem('token')}>LogOut</a>
                            </li>}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    };

export default Header;
