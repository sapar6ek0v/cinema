import React from 'react';
import {Container, Row} from "react-bootstrap";
import SerialCard from "./SerialCard";

const SerialPage = ({pages, getSerials, setPages}) => {
    return (
        <>
            <div className='get-films-block'>
                <Container>
                    <div className='py-5'>
                        { pages > 1 && <button onClick={() => setPages(1)}>{1}</button> }
                        { pages >= 4 && <span>...</span> }
                        { pages >= 3 && <button onClick={() => setPages(pages- 1)}>{pages - 1}</button> }
                        <button onClick={() => setPages(pages)}>{pages}</button>
                        { pages < 99 && <button onClick={() => setPages(pages + 1)}>{pages + 1}</button> }
                        { pages < 98 && <span>...</span> }
                        { pages < 100 && <button onClick={() => setPages(100)}>{100}</button> }
                    </div>
                    <Row>
                        {
                            getSerials.map(serial => {
                                return <SerialCard key={serial.id} film={serial} />
                            })
                        }
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default SerialPage;