import React from 'react';
import '../Facts/facts-card.css'

const FilmsKeyWords = ({keyWords}) => {
    return (
        <>
            {
                keyWords.map(it => {
                    return (
                        <button className='films-key-word-btn'>
                            {it.name}
                        </button>
                    )
                })
            }
        </>
    );
};

export default FilmsKeyWords;