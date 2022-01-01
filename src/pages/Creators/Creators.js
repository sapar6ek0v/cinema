import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY, URL_BASE} from "../../constants/api";
import {useParams} from "react-router-dom";

const Creators = () => {
    const {id} = useParams()
    const [producers, setProducers] = useState([])
    const jobs = ["Director", "Producer", "Screenplay"]

    useEffect(() => {
        axios(`${URL_BASE}/movie/${id}/credits?api_key=${API_KEY}&language=ru`)
            .then(({data}) => {
                setProducers(data.crew.filter(it => jobs.includes(it.job)))
                console.log(producers)
            })
    }, [])

    return (
            <div className='row'>
                {
                    producers?.map(people => {
                        return (
                            <div key={people.id} className='col-sm-6 col-md-4 col-lg-3 '>
                                <div className='mb-2'>
                                    <div className='creotors-job'>
                                        {people.job}
                                    </div>
                                    <div className='creotors-name'>
                                        {people.name}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
    );
};

export default Creators;