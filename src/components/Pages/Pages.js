import React from 'react';
import {Container} from "react-bootstrap";
import FilmsCard from "../FilmCard/FilmsCard";
import Buttons from "../Buttons/Buttons";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './pages.css'

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
                        <TransitionGroup className="row">
                            {getFilms.map(film => (
                                <CSSTransition
                                    key={film.id}
                                    timeout={500}
                                    classNames="item"
                                >
                                    <FilmsCard key={film.id} film={film} />
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                </Container>
            </div>
        </>
    );
};

export default Pages;