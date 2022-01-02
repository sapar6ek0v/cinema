import React from 'react';
import {Dropdown} from "react-bootstrap";
import {Link} from "react-router-dom";

const HeaderLink = ({link, title}) => {
    return (
        <Dropdown.Item>
            <Link className='link' to={`/${link}`}>
                {title}
            </Link>
        </Dropdown.Item>
    );
};

export default HeaderLink;