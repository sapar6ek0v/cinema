import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY, URL_BASE} from "../../constants/api";
import {useParams} from "react-router-dom";
import {Container} from "react-bootstrap";

const TopSearchPeopleInfo = () => {
    const {name} = useParams()
    const [people, setPeople] = useState([])



    useEffect(() => {
        axios(`${URL_BASE}/movie/person?api_key=${API_KEY}&query=${name}`)
            .then(({data}) => {
                setPeople(data.results)
                console.log(people)
            })
    }, [name])

    return (
        <Container>
            {/*<div className='py-5'>*/}
            {/*    { pages > 1 && <button onClick={() => setPages(1)}>{1}</button> }*/}
            {/*    { pages >= 4 && <span>...</span> }*/}
            {/*    { pages >= 3 && <button onClick={() => setPages(pages- 1)}>{pages - 1}</button> }*/}
            {/*    <button onClick={() => setPages(pages)}>{pages}</button>*/}
            {/*    { pages < 99 && <button onClick={() => setPages(pages + 1)}>{pages + 1}</button> }*/}
            {/*    { pages < 98 && <span>...</span> }*/}
            {/*    { pages < 100 && <button onClick={() => setPages(100)}>{100}</button> }*/}
            {/*</div>*/}
            {/*{*/}
            {/*    people.map(person => {*/}
            {/*        return (*/}
            {/*            <div>*/}
            {/*                kkk*/}
            {/*            </div>*/}
            {/*        )*/}
            {/*    })*/}
            {/*}*/}
        </Container>
    );
};

export default TopSearchPeopleInfo;