import React from 'react';
import { DropdownButton} from "react-bootstrap";
import './header-dropdown.css'
import {Link} from "react-router-dom";


const HeaderDropDown = () => {

    return (
        <DropdownButton id="dropdown-basic-button" title="Movies">
            <Link to='popular' className='dropdown-link'>
                Popular
            </Link>
            <Link to='top-rated' className='dropdown-link'>
                Top Rated
            </Link>
            <Link to='upcoming' className='dropdown-link'>
                Upcoming
            </Link>
        </DropdownButton>
    );
};

export default HeaderDropDown;