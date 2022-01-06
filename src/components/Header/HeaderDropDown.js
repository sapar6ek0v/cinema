import React from 'react';
import { DropdownButton} from "react-bootstrap";
import './header-dropdown.css'
import {Link} from "react-router-dom";


const HeaderDropDown = () => {

    return (
        <DropdownButton id="dropdown-basic-button" title="Movies">
            <Link to='popular?page=1' className='dropdown-link'>
                Popular
            </Link>
            <Link to='top-rated?page=1' className='dropdown-link'>
                Top Rated
            </Link>
            <Link to='upcoming?page=1' className='dropdown-link'>
                Upcoming
            </Link>
            <Link to='now-playing?page=1' className='dropdown-link'>
                Now Playing
            </Link>
        </DropdownButton>
    );
};

export default HeaderDropDown;