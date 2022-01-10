import React from 'react';
import {Container, Row} from "react-bootstrap";
import FilmsCard from "../FilmCard/FilmsCard";
import Buttons from "../Buttons/Buttons";

const Pages = ({pages, getFilms, setPages, setQuery}) => {

    const getPages = (num) => {
        setPages(num)
        setQuery({page: String(num)})
    }


    return (
        <>
            <div className='get-films-block'>
                <Container>
                    <Buttons pages={pages} getPages={getPages} />
                    <Row>
                        {
                            getFilms.map(film => {
                                return <FilmsCard key={film.id} film={film} />
                            })
                        }
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Pages;