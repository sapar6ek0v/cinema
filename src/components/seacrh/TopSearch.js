import React from 'react';
import {Link} from "react-router-dom";
import search from "../../image/VisualEditor_-_Icon_-_Search-big.svg.png"

const TopSearch = () => {
    return (
        <div className='search-box'>
            <input className='search-input' type="text" placeholder='Search for a movie, TV Show or celebrity that you are looking for'/>
            <Link to='/'>
                <img className='search-img' src={search} alt=""/>
            </Link>
        </div>
    );
};

export default TopSearch;