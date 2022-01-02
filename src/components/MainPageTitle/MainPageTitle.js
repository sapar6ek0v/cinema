import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

const MainPageTitle = ({title, item}) => {
    return (
        <>
            <div className='content-title'>{title}</div>
            <div>
                <Link className='content-link' to={`/${item}`}>
                    VIEW ALL <FontAwesomeIcon icon={faAngleRight}/>
                </Link>
            </div>
        </>
    );
};

export default MainPageTitle;