import React from 'react';

const HeaderDropDown = () => {
    return (
        <ul>
            <li>
                <ul className='header-link-none'>
                    <li>
                        <button>Popular</button>
                    </li>
                    <li>
                        <button>Top Rated</button>
                    </li>
                    <li>
                        <button>Upcoming</button>
                    </li>
                </ul>
            </li>
        </ul>
    );
};

export default HeaderDropDown;