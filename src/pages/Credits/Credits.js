import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY, PHOTO_BASE, URL_BASE} from "../../constants/api";
import {Link, useParams} from "react-router-dom";
import {Container, Row} from "react-bootstrap";
import anonym from "../../image/profile.jpg"

const Credits = () => {
    const {id} = useParams()
    const [credits, setCredits] = useState([])
    const [actors, setActors] = useState(10)


    useEffect(() => {
        axios(`${URL_BASE}/movie/${id}/credits?api_key=${API_KEY}&language=ru`)
            .then(({data}) => {
                setCredits(data.cast)
            })
    }, [])

    return (
        <div className='credits-box'>
          <Container>
              <div className='d-flex overflow-auto'>
                  {
                      credits?.slice(0, actors)?.map(people => {
                          return (
                              <div>
                                  <div className='block'>
                                      <Link to={`/credits-info/${people.id}`}>
                                          <div>{people.name}</div>
                                          <img className='photo-box' src={people.profile_path ? `${PHOTO_BASE}${people.profile_path}` : anonym} alt={people.name}/>
                                      </Link>
                                  </div>
                              </div>
                          )
                      })
                  }
                  {
                     actors < credits.length && <div>
                          <button onClick={() => setActors(actors + 10)} type='button'>Смотреть ещё...</button>
                      </div>
                  }
              </div>
          </Container>
        </div>
    );
};

export default Credits;