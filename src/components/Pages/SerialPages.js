import React from 'react';
import {Container, Row} from "react-bootstrap";
import Buttons from "../Buttons/Buttons";
import SerialCard from "../SerilasPage/SerialCard";

const SerialPages = ({pages, getSerials, setPages, setQuery}) => {

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
                            getSerials.map(serial => {
                                return <SerialCard key={serial.id} serial={serial} />
                            })
                        }
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default SerialPages;