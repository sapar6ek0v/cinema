import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY, URL_BASE} from "../../constants/api";
import {Container, Row} from "react-bootstrap";
import SerialCard from "../../components/SerilasPage/SerialCard";

const TopRatedSerials = () => {
    const [topRatedSer, setTopRatedSer] = useState([])

    useEffect(() => {
        axios(`${URL_BASE}/tv/top_rated?api_key=${API_KEY}&language=en-US`)
            .then(({data}) => {
                setTopRatedSer(data.results)
            })
    }, [])


    return (
        <div className='get-films-block'>
            <Container>
                <Row>
                    {
                        topRatedSer.map(it => {
                            return (
                                <SerialCard serial={it} />
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    );
};

export default TopRatedSerials;