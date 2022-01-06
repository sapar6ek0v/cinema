import React from 'react';

const Buttons = ({pages, getPages}) => {
    return (
        <div className='py-5'>
            { pages > 1 && <button onClick={() => getPages(1)}>{1}</button> }
            { pages >= 4 && <span>...</span> }
            { pages >= 3 && <button onClick={() => getPages(pages- 1)}>{pages - 1}</button> }
            <button onClick={() => getPages(pages)}>{pages}</button>
            { pages < 99 && <button onClick={() => getPages(pages + 1)}>{pages + 1}</button> }
            { pages < 98 && <span>...</span> }
            { pages < 100 && <button onClick={() => getPages(100)}>{100}</button> }
        </div>
    );
};

export default Buttons;