import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY, URL_BASE} from "../../constants/api";
import {Container, Row} from "react-bootstrap";
import SerialCard from "../../components/SerilasPage/SerialCard";

const PopularSerials = () => {
    const [pages, setPages] = useState(1)
    const [popSer, setPop] = useState([])

    useEffect(() => {
        axios(`${URL_BASE}/tv/popular?api_key=${API_KEY}&language=en-US&page=${pages}`)
            .then(({data}) => {
                setPop(data.results)
            })
    }, [pages])

    return (
       <div className='get-films-block'>
           <Container>
               <Row >
                   {
                       popSer.map(it => {
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

export default PopularSerials;