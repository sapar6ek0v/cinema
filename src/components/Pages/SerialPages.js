import React from 'react';
import {Container, Row} from "react-bootstrap";
import Buttons from "../Buttons/Buttons";
import SerialCard from "../SerilasPage/SerialCard";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './serial-page.css'


const SerialPages = ({pages, getSerials, setPages, setQuery}) => {

    const getPages = (num) => {
        setPages(num)
        setQuery({page: String(num)})
    }


    return (
        <>
            <div className='get-films-block'>
                <Container>
                    <Buttons pages={pages} getPages={getPages}/>
                    <TransitionGroup className="row">
                        {getSerials.map(serial => (
                            <CSSTransition
                                key={serial.id}
                                timeout={500}
                                classNames="item"
                            >
                                <SerialCard key={serial.id} serial={serial}/>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </Container>
            </div>
        </>
    );
};

export default SerialPages;