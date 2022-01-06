import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY, URL_BASE} from "../../../constants/api";
import {useParams} from "react-router-dom";
import Media from "../../Media/Media";

const SerialMedia = () => {
    const {id} = useParams()
    const [media, setMedia] = useState({})

    useEffect(() => {
        axios(`${URL_BASE}/tv/${id}/external_ids?api_key=${API_KEY}&language=ru,en`)
            .then(({data}) => {
                setMedia(data)
            })

    }, [id])

    return (
        <Media media={media} />
    );
};

export default SerialMedia;