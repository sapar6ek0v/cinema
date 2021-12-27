import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className='header'>
               <div className='about-box'>
                   <Link className='link' to='/'>
                       home
                   </Link>
                   <Link className='link' to='/'>
                       serials
                   </Link>
                   <Link className='link' to='/'>
                       news
                   </Link>
                   <Link className='link' to='/'>
                       community
                   </Link>
               </div>
                <div className='register-box'>
                    <Link className='link' to='/'>
                        pages
                    </Link>
                    <Link className='link' to='/'>
                        help
                    </Link>
                    <Link className='link' to='/'>
                        login
                    </Link>
                    <Link  className='link register-button' to='/'>
                        sign up
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;