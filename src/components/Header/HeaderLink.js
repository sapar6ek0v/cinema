import React from 'react';
import {Dropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const HeaderLink = ({link, title}) => {
    return (
        <Dropdown.Item>
            <NavLink className='link' to={`/${link}`}>
                {title}
            </NavLink>
        </Dropdown.Item>
    );
};

export default HeaderLink;