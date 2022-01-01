import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import {Container, Row} from "react-bootstrap";
import FilmsCard from "../../components/Film-card/FilmsCard";

const TopSearchInfo = () => {
    const {name} = useParams()

    const [search, setSearch] = useState([])

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/search/movie?api_key=4eb03517df3f1b8227a751b8d89d9ee8&language=en-US&query=${name}`)
            .then(({data}) => {
                setSearch(data.results)
                console.log(data)
            })



    }, [name])

    return (
        <div className='search-page'>
            <Container>
                <Row>
                    {
                        search.map((film) => {
                            return (
                                <FilmsCard key={film.id} film={film} />
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    );
};

export default TopSearchInfo;