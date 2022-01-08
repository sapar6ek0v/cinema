import React from 'react';
import './facts-card.css'
import FilmsKeyWords from "../FilmCard/FilmsKeyWords";

const FactsCard = ({film, keyWords}) => {
    return (
        <div className='films-details-block'>
            <h3 className='films-details-title'>Original name</h3>
            <div className='films-details-item'>{film.original_title ? film.original_title : '-'}</div>
            <h3 className='films-details-title'>Status</h3>
            <div className='films-details-item'>{film.status ? film.status: '-'}</div>
            <h3 className='films-details-title'>Budget</h3>
            <div className='films-details-item'>${film.budget ? film.budget.toLocaleString('en') : '-'}</div>
            <h3 className='films-details-title'>Revenue</h3>
            <div className='films-details-item'>${film.revenue ? film.revenue.toLocaleString('en')  : '-'}</div>
            <h3 className='films-details-title'>Keywords</h3>
            <div>
                <FilmsKeyWords keyWords={keyWords} />
            </div>
        </div>
    );
};

export default FactsCard;