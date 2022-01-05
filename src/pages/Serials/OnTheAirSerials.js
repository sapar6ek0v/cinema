import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY, URL_BASE} from "../../constants/api";
import {Container, Row} from "react-bootstrap";
import SerialCard from "../../components/SerilasPage/SerialCard";

const OnTheAirSerials = () => {
    const [onTheAirSer, setOnTheAirSer] = useState([])

    useEffect(() => {
        axios(`${URL_BASE}/tv/on_the_air?api_key=${API_KEY}&language=en-US`)
            .then(({data}) => {
                setOnTheAirSer(data.results)
            })
    }, [])


    return (
        <div className='get-films-block'>
            <Container>
                <Row >
                    {
                        onTheAirSer.map(it => {
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

export default OnTheAirSerials;