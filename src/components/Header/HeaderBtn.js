import React from 'react';
import {useNavigate} from "react-router-dom";

const HeaderBtn = ({title, item}) => {
    const navigate = useNavigate()

    const onNavigate = (value) => {
       navigate(`/${value}`)
    }


    return (
        <button className='header-btn' onClick={() => onNavigate(`${item}`)}>
            {title}
        </button>
    );
};

export default HeaderBtn;