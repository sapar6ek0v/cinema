import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import search from "../../image/VisualEditor_-_Icon_-_Search-big.svg.png"

const TopSearch = () => {
    const navigate = useNavigate()

    const [film, setFilm] = useState('')

    const onChange = (e) => setFilm(e.target.value.trim())


    const onKeyDown = () => {
        if (film) {
            navigate(`/search-films/${film}`)
        }
    }

    const onChangeDown = (e) => {
      if (e.key === 'Enter') {
          navigate(`/search-films/${film}`)
      }
    }

    return (
       <div className='py-5'>
           <div className='search-box'>
               <input onChange={onChange} onKeyDown={onChangeDown} className='search-input' type="text"
                      placeholder='Search for a movie, TV Show or celebrity that you are looking for'/>
               {
                   <button className='search-btn' onClick={onKeyDown} disabled={!film}>
                       <img className='search-img' src={search} alt=""/>
                   </button>

               }
           </div>
       </div>
    );
};

export default TopSearch;