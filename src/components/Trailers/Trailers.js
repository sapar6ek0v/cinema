import React from 'react';

const Trailers = ({videoKey, setModal, filmImg}) => {


    return (
        <div onClick={() => setModal(false)} className='position-fixed top-0 h-100 w-100 modal-bg'>
            <div className='d-flex justify-content-center align-items-center h-100'>
                <img src={`https://www.youtube.com/embed/${videoKey}`} alt=""/>
                <iframe width="780" height="615" src={`https://www.youtube.com/embed/${videoKey} `}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </div>
        </div>
    );
};

export default Trailers;