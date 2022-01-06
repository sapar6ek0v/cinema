import React from 'react';
import './loading.css'

const Loading = () => {
    return (
        <div className='center'>
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;