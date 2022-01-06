import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY, PHOTO_BASE, URL_BASE} from "../../constants/api";
import {Link, useParams} from "react-router-dom";
import {Container} from "react-bootstrap";
import anonym from "../../image/profile.jpg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons";

const Credits = () => {
    const {id} = useParams()
    const [credits, setCredits] = useState([])
    const [actors, setActors] = useState(10)


    useEffect(() => {
        axios(`${URL_BASE}/movie/${id}/credits?api_key=${API_KEY}&language=ru`)
            .then(({data}) => {
                setCredits(data.cast)
            })
    }, [id])

    return (
        <div className='credits-box'>
          <Container>
              <h3 className='actors-title'>В главных ролях</h3>
              <div className='px-3 py-4'>
                  {
                      credits?.slice(0, actors)?.map(people => {
                          return (
                              <div key={people.id} className='photo-page'>
                                      <Link to={`/credits-info/${people.id}`} className='text-decoration-none d-flex'>
                                          <div className='photo-box'>
                                              <img className='photo-box-img' src={people.profile_path ? `${PHOTO_BASE}${people.profile_path}` : anonym} alt={people.name}/>
                                          </div>
                                          <div className='py-5'>
                                              <div className='fw-bold text-white px-4 '>{people.name}</div>
                                              <div className='px-4 '>{people.character}</div>
                                          </div>
                                      </Link>
                              </div>
                          )
                      })
                  }
                  {
                     actors < credits.length && <div className='d-flex align-items-center'>
                          <button onClick={() => setActors(actors + 10)} className='credits-btn' type='button'>Смотреть ещё... <span className=' credits-btn'><FontAwesomeIcon icon={faUserPlus}/></span></button>
                      </div>
                  }
              </div>
          </Container>
        </div>
    );
};

export default Credits;