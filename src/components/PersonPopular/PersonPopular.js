import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../constants/api";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const PersonPopular = () => {
    const [personPop, setPersonPop] = useState([])

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US`)
            .then(({data}) => {
                setPersonPop(data.results)
            })
    } ,[])

    return (
        <>
            <div className='content-title content-bor'>SPOTLIGHT CELEBRITIES</div>
            <div className='py-4'>
                {
                    personPop.slice(0, 4).map((person) => {
                        return (
                            <Link to={`credits-info/${person.id}`} className='d-flex align-items-center mb-4 text-decoration-none'>
                                <img className='person-popular-img' src={"https://image.tmdb.org/t/p/w500" + person.profile_path} alt=""/>
                                <div>
                                    <div className='person-popular-title'>{person.name}</div>
                                    <div className='person-popular-pod-title'>{person.known_for_department}</div>
                                </div>
                            </Link>
                        )
                    })
                }
                <Link to='/' className='content-link'>
                    SEE ALL CELEBRITIES <FontAwesomeIcon icon={faAngleRight}/>
                </Link>
            </div>
        </>
    );
};

export default PersonPopular;