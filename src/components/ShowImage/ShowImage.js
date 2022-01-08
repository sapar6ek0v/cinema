import React from 'react';
import {PHOTO_BASE} from "../../constants/api";

const ShowImage = ({setModalImage, item}) => {
    return (
        <div onClick={() => setModalImage(false)} className='position-fixed top-0 h-100 w-100 modal-bg'>
            <div className='d-flex justify-content-center align-items-center h-100'>
                <img src={`${PHOTO_BASE}${item.poster_path}`} alt='film-bg'/>
            </div>
        </div>
    );
};

export default ShowImage;